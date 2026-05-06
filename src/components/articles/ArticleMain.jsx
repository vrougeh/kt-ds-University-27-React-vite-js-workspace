import { useSelector } from "react-redux";
import ArticleHeader from "./ArticleHeader.jsx";
import ArticleList from "./ArticleList.jsx";
import ArticleWriter from "./ArticleWriter.jsx";
import Login from "../user/Login.jsx";
import ArticleTable from "./ArticleTable.jsx";
const ArticleMain = () => {
  const { count } = useSelector((store) => store.article);

  return (
    <div className="wrapper">
      {/* <Login /> */}
      <div>{count}개의 게시글이 검색되었습니다.</div>
      <ArticleTable>
        <ArticleHeader />
        <ArticleList />
      </ArticleTable>
      <ArticleWriter />
    </div>
  );
};

export default ArticleMain;
