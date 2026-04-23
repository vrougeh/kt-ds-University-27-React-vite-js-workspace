//articles.json 파일 불러오기
import ArticleHeader from "./ArticleHeader";
import ArticleList from "./ArticleList";
import articleData from "./articles.json";
import ArticleWriter from "./ArticleWriter";
const ArticleMain = () => {
  console.log(articleData);
  return (
    <div>
      <table>
        <thead>
          <ArticleHeader />
        </thead>
        <tbody>
          <ArticleList />
        </tbody>
      </table>
      <div>
        <ArticleWriter />
        게시글 작성 폼(제목, 이메일, 이름, 내용)
      </div>
    </div>
  );
};
export default ArticleMain;
