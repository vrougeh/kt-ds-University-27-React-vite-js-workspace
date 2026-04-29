import {
  fetchArticleList,
  fetchJsonWebToken,
} from "../../http/articles/fetchArticles.js";
import ArticleHeader from "./ArticleHeader.jsx";
import ArticleList from "./ArticleList.jsx";
import ArticleWriter from "./ArticleWriter.jsx";
import { useEffect, useState } from "react";
const ArticleMain = () => {
  // console.log(articleData);

  const [token, setToken] = useState();

  const onLoginButtonClickHandler = async (email, password) => {
    const loginToken = await fetchJsonWebToken(email, password);
    setToken(loginToken);
  };

  const [viewPageNo, setViewPageNo] = useState(0);

  const onPagenationButtonClickHandler = (nextPageNo) => {
    setViewPageNo(nextPageNo);
  };
  const [
    {
      count,
      result: articles,
      pagenation: { pageNo = 0, pageCount = 1 },
    },
    setCashedData,
  ] = useState({
    count: 0,
    result: [],
    pagenation: {},
  });
  console.log(count, articles, pageNo, pageCount);

  const [write, setwrite] = useState(true);

  const refreshArticleList = async () => {
    const ArticleList = await fetchArticleList(viewPageNo);
    const {
      result: { count, result },
      pagenation,
    } = ArticleList;

    if (!ArticleList.error) {
      setCashedData({ count, result, pagenation });
    } else {
      alert(ArticleList.error);
    }
  };

  useEffect(() => {
    refreshArticleList();
  }, [viewPageNo]);

  const onSaveButtonClickHandler = (subject, name, email, content) => {
    setCashedData((prevData) => [
      ...prevData,
      {
        id:
          "BO-" +
          "formattedDate" +
          "-" +
          String(prevData.length + 1).padStart(6, "0"),
        subject,
        content,
        viewCnt: parseInt(Math.random() * 100),
        crtDt: "formattedDateTime",
        membersVO: {
          name,
          email,
        },
        email,
      },
    ]);
    // setwrite(true);
  };
  const onCancelButtonClickHandler = () => {
    setwrite(true);
  };
  const onWriteButtonClickHandler = () => {
    setwrite(false);
  };

  const isnonwrite = write && (
    <div>
      <button type="button" onClick={onWriteButtonClickHandler}>
        글쓰기
      </button>
    </div>
  );
  const iswrite = !write && (
    <ArticleWriter
      onSaveButtonClick={onSaveButtonClickHandler}
      onCancelButtonClick={onCancelButtonClickHandler}
    />
  );

  return (
    <div className="wrapper">
      {!token && (
        <div>
          <div>
            <div>이메일</div>
            <input type="text" id="email" />
          </div>
          <div>
            <div>비밀번호</div>
            <input type="password" id="password" />
          </div>
          <button type="button" onClick={onLoginButtonClickHandler}>
            로그인
          </button>
        </div>
      )}
      <div>{count}개의 게시글이 검색되었습니다.</div>
      <table>
        <thead>
          <ArticleHeader />
        </thead>
        <tbody>
          <ArticleList articleData={articles} />
        </tbody>
      </table>
      <div>
        {pageNo > 0 && (
          <button
            type="button"
            onClick={onPagenationButtonClickHandler.bind(this, pageNo - 1)}
          >
            이전
          </button>
        )}
        {pageNo == 0 && pageCount - 1 > pageNo && (
          <button
            type="button"
            onClick={onPagenationButtonClickHandler.bind(this, pageNo + 1)}
          >
            다음
          </button>
        )}
      </div>
      <div>
        {iswrite}
        {isnonwrite}
      </div>
    </div>
  );
};
export default ArticleMain;
