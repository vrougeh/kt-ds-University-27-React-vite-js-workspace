import { useRef } from "react";

const ArticleWriter = ({ onSaveButtonClick, onCancelButtonClick }) => {
  const subjectRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const contentRef = useRef();

  // 저장을 클릭하면 입력했던 값을 가져와 출력한다.
  const onSaveButtonClickHandler = () => {
    console.log("subjectRef", subjectRef.current.value);
    console.log("emailRef", emailRef.current.value);
    console.log("nameRef", nameRef.current.value);
    console.log("contentRef", contentRef.current.value);
    onSaveButtonClick(
      subjectRef.current.value,
      emailRef.current.value,
      nameRef.current.value,
      contentRef.current.value,
    );
    subjectRef.current.value = "";
    emailRef.current.value = "";
    nameRef.current.value = "";
    contentRef.current.value = "";
  };

  return (
    <>
      <div>
        <div>제목</div>
        <input type="text" id="subject" ref={subjectRef} />
      </div>
      <div>
        <div>이메일</div>
        <input type="text" id="email" ref={emailRef} />
      </div>
      <div>
        <div>이름</div>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div>
        <div>내용</div>
        <textarea type="text" id="content" ref={contentRef} />
      </div>
      <div>
        <button type="button" onClick={onSaveButtonClickHandler}>
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
