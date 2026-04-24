const ArticleWriter = ({
  inputData: { subject, email, name, content },
  onSubjectChange,
  onEmailChange,
  onNameChange,
  onContentChange,
  onSaveButtonClick,
  onCancelButtonClick,
}) => {
  return (
    <>
      <div>
        <div>제목</div>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={onSubjectChange}
        />
      </div>
      <div>
        <div>이메일</div>
        <input type="text" id="email" value={email} onChange={onEmailChange} />
      </div>
      <div>
        <div>이름</div>
        <input type="text" id="name" value={name} onChange={onNameChange} />
      </div>
      <div>
        <div>내용</div>
        <textarea
          type="text"
          id="content"
          value={content}
          onChange={onContentChange}
        />
      </div>
      <div>
        <button type="button" onClick={onSaveButtonClick}>
          저장
        </button>
      </div>
      <div>
        <button type="button" onClick={onCancelButtonClick}>
          취소
        </button>
      </div>
    </>
  );
};
export default ArticleWriter;
