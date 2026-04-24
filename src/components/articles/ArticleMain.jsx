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

  const [{ subject, email, name, content }, setNewArticle] = useState({
    subject: "",
    email: "",
    name: "",
    content: "",
  });

  const [write, setwrite] = useState(true);

  const onSubjectChangeHandler = (event) => {
    setNewArticle((prevData) => ({
      ...prevData,
      subject: event.target.value,
    }));
  };
  const onEmailChangeHandler = (event) => {
    setNewArticle((prevData) => ({
      ...prevData,
      email: event.target.value,
    }));
  };
  const onNameChangeHandler = (event) => {
    setNewArticle((prevData) => ({
      ...prevData,
      name: event.target.value,
    }));
  };
  const onContentChangeHandler = (event) => {
    setNewArticle((prevData) => ({
      ...prevData,
      content: event.target.value,
    }));
  };
  const onSaveButtonClickHandler = () => {
    setCashedData((prevData) => [
      ...prevData,
      {
        id:
          "BO-" +
          formattedDate +
          "-" +
          String(prevData.length + 1).padStart(6, "0"),
        subject,
        viewCnt: parseInt(Math.random() * 100),
        crtDt: formattedDateTime,
        membersVO: {
          name,
        },
        email,
      },
    ]);
    setwrite(true);
    setNewArticle({ subject: "", email: "", name: "", content: "" });
  };
  const onCancelButtonClickHandler = () => {
    setwrite(true);
    setNewArticle({ subject: "", email: "", name: "", content: "" });
  };
  const onWriteButtonClickHandler = () => {
    setwrite(false);
  };

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
        <ArticleWriter
          inputData={{ subject, email, name, content }}
          data={{ write }}
          onSubjectChange={onSubjectChangeHandler}
          onEmailChange={onEmailChangeHandler}
          onNameChange={onNameChangeHandler}
          onContentChange={onContentChangeHandler}
          onSaveButtonClick={onSaveButtonClickHandler}
          onCancelButtonClick={onCancelButtonClickHandler}
          onWriteButtonClick={onWriteButtonClickHandler}
        />
      </div>
    </div>
  );
};
export default ArticleMain;
