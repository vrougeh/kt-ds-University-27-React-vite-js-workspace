export const fetchArticleList = async (pageNo = 0, listSize = 10) => {
  try {
    const articleResponse = await fetch(
      `http://192.168.211.28:8080/api/articles?pageNo=${pageNo}&listSize=${listSize}`,
    );
    const articleList = await articleResponse.json();
    return articleList;
  } catch (e) {
    return {
      result: { count: 0, result: [] },
      pagenation: {},
      error: "서비스가 잠시 중단되었습니다. 잠시 후 다시 시도해주세요",
    };
  }
};

export const fetchJsonWebToken = async (email, password) => {
  const loginResponse = await fetch(
    "http://192.168.211.28:8080/api/authorization",
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    },
  );
  const loginResult = await loginResponse.json();
  return loginResult;
};

export const fetchAddArticle = async (jwt, subject, content, attachFile) => {
  try {
    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("content", content);

    //attachFile > FileList 배열
    //FileList내에 존재하는 파일 객체들을 attachFile로 하나씩 할당
    for (const file of attachFile) {
      formData.append("attachFile", file);
    }

    const articleResponse = await fetch(
      "http://192.168.211.28:8080/api/articles",
      {
        method: "post",
        headers: { Authorization: jwt },
        body: formData,
      },
    );
    const addResult = await articleResponse.json();
    return addResult;
  } catch (e) {
    return {
      result: false,
      error: "서비스가 잠시 중단되었습니다. 잠시 후 다시 시도해주세요",
    };
  }
};
