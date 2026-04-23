const ArticleWriter = () => {
  return (
    <>
      <div>
        <div>제목</div>
        <input type="text" id="subject" />
      </div>
      <div>
        <div>이메일</div>
        <input type="text" id="email" />
      </div>
      <div>
        <div>이름</div>
        <input type="text" id="name" />
      </div>
      <div>
        <div>내용</div>
        <textarea type="text" id="content" />
      </div>
      <div>
        <button type="button"> 저장 </button>
      </div>
      <div>
        <button type="button"> 취소 </button>
      </div>
    </>
  );
};
export default ArticleWriter;
