//articles.json 파일 불러오기
import articleData from "./articles.json";
import ArticleHeader from "./ArticleHeader.jsx";
import ArticleList from "./ArticleList.jsx";
import ArticleWriter from "./ArticleWriter.jsx";
const ArticleMain = () => {
  console.log(articleData);
  return (
    <div className="wrapper">
      <table>
        <thead>
          <ArticleHeader />
        </thead>
        <tbody>
          <ArticleList articleData={articleData} />
        </tbody>
      </table>
      <div>
        <ArticleWriter />
      </div>
    </div>
  );
};
export default ArticleMain;
