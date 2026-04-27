//articles.json 파일 불러오기
import articleData from "./articles.json";
import ArticleHeader from "./ArticleHeader.jsx";
import ArticleList from "./ArticleList.jsx";
import ArticleWriter from "./ArticleWriter.jsx";
import { useState } from "react";
const ArticleMain = () => {
  // console.log(articleData);
  const now = new Date();
  const formattedDate = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
  const formattedDateTime = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;

  const [cashedData, setCashedData] = useState(articleData.articles);
  // console.log(cashedData);

  const [write, setwrite] = useState(true);

  const onSaveButtonClickHandler = (subject, name, email, content) => {
    setCashedData((prevData) => [
      ...prevData,
      {
        id:
          "BO-" +
          formattedDate +
          "-" +
          String(prevData.length + 1).padStart(6, "0"),
        subject,
        content,
        viewCnt: parseInt(Math.random() * 100),
        crtDt: formattedDateTime,
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
      <div>{cashedData.length}개의 게시글이 검색되었습니다.</div>
      <table>
        <thead>
          <ArticleHeader />
        </thead>
        <tbody>
          <ArticleList articleData={cashedData} />
        </tbody>
      </table>
      <div>
        {iswrite}
        {isnonwrite}
      </div>
    </div>
  );
};
export default ArticleMain;
