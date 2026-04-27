import { useRef } from "react";
import { Alert } from "../ui/Modals";

const ArticleWriter = ({ onSaveButtonClick, onCancelButtonClick }) => {
  const subjectRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const contentRef = useRef();

  const alertRef = useRef();

  // 저장을 클릭하면 입력했던 값을 가져와 출력한다.
  const onSaveButtonClickHandler = () => {
    console.log(alertRef);
    if (!subjectRef.current.value) {
      alertRef.current.showModal("제목을 입력해주세요");
      return;
    }
    if (!emailRef.current.value) {
      alertRef.current.showModal("이메일을 입력해주세요");
      return;
    }
    if (!nameRef.current.value) {
      alertRef.current.showModal("이름을 입력해주세요");
      return;
    }
    if (!contentRef.current.value) {
      alertRef.current.showModal("내용을 입력해주세요");
      return;
    }
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
      <Alert dialogRef={alertRef} />
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
