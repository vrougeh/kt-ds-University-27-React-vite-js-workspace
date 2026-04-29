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

export const fetchJsonWebToken = (id, password) => {};

export const fetchAddArticle = async () => {
  const articleResponse = await fetch(
    "http://192.168.211.28:8080/api/articles",
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      // body 추가하기
    },
  );
  const addResult = await articleResponse.json();
  return addResult;
};
