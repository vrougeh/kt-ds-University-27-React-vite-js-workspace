import {
  fetchAddArticle,
  fetchArticleList,
  fetchJsonWebToken,
} from "../../http/articles/fetchArticles.js";
import { getValidationResult } from "../../utils/errorHandler.js";
import { isString } from "../../utils/type.js";
import ArticleHeader from "./ArticleHeader.jsx";
import ArticleList from "./ArticleList.jsx";
import ArticleWriter from "./ArticleWriter.jsx";
import { useEffect, useRef, useState } from "react";
const ArticleMain = () => {
  // console.log(articleData);

  const [token, setToken] = useState();
  const [loginErrors, setLoginErrors] = useState();

  //interrectiveHandle을 위한 ref
  const writerRef = useRef();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onLoginButtonClickHandler = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const loginToken = await fetchJsonWebToken(email, password);
    console.log(loginToken);
    if (!loginToken.error) {
      setToken(loginToken.token);
    } else {
      if (isString(loginToken.error)) {
        setLoginErrors(loginToken.error);
      } else {
        setLoginErrors(getValidationResult(loginToken.error));
      }
      // alert(loginToken.error);
    }
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

  const onSaveButtonClickHandler = async (subject, content, attachFile) => {
    const addResult = await fetchAddArticle(
      token,
      subject,
      content,
      attachFile,
    );
    if (addResult.error) {
      writerRef.current.setResponseError(addResult.error);
    } else {
      refreshArticleList();
    }

    // setwrite(true);
  };
  const onCancelButtonClickHandler = () => {
    setwrite(true);
  };
  const onWriteButtonClickHandler = () => {
    setwrite(false);
  };

  return (
    <div className="wrapper">
      {!token && (
        <div>
          {isString(loginErrors) && <div>{loginErrors}</div>}
          <div>
            <label htmlFor="email">이메일</label>
            <input type="text" id="email" ref={emailRef} />
            {loginErrors?.email && <div>{loginErrors.email}</div>}
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" ref={passwordRef} />
            {loginErrors?.password && <div>{loginErrors.password}</div>}
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
        {write ? (
          <div>
            <button type="button" onClick={onWriteButtonClickHandler}>
              글쓰기
            </button>
          </div>
        ) : (
          <ArticleWriter
            errorHandleRef={writerRef}
            onSaveButtonClick={onSaveButtonClickHandler}
            onCancelButtonClick={onCancelButtonClickHandler}
          />
        )}
      </div>
    </div>
  );
};
export default ArticleMain;
