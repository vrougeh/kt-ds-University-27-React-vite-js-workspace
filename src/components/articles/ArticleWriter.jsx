import { useImperativeHandle, useRef, useState } from "react";
import { Alert } from "../ui/Modals";
import { isString } from "../../utils/type";
import { getValidationResult } from "../../utils/errorHandler";

const ArticleWriter = ({
  errorHandleRef,
  onSaveButtonClick,
  onCancelButtonClick,
}) => {
  const [addError, setAddError] = useState();

  useImperativeHandle(errorHandleRef, () => {
    return {
      setResponseError(fetchError) {
        if (isString(fetchError)) {
          setAddError(fetchError);
        } else {
          setAddError(getValidationResult(fetchError));
        }
      },
    };
  });

  const subjectRef = useRef();
  const contentRef = useRef();
  const attachFileRef = useRef();

  const alertRef = useRef();

  // 저장을 클릭하면 입력했던 값을 가져와 출력한다.
  const onSaveButtonClickHandler = () => {
    console.log(alertRef);
    if (!subjectRef.current.value) {
      alertRef.current.showModal("제목을 입력해주세요");
      return;
    }
    if (!contentRef.current.value) {
      alertRef.current.showModal("내용을 입력해주세요");
      return;
    }
    onSaveButtonClick(
      subjectRef.current.value,
      contentRef.current.value,
      attachFileRef.current.files,
    );
    subjectRef.current.value = "";
    contentRef.current.value = "";
    attachFileRef.current.value = "";
  };

  return (
    <>
      <Alert dialogRef={alertRef} />
      {isString(addError) && <div>{addError}</div>}
      <div>
        <div>제목</div>
        <input type="text" id="subject" ref={subjectRef} />
      </div>
      <div>
        <div>내용</div>
        <textarea type="text" id="content" ref={contentRef} />
      </div>
      <div>
        <div>첨부파일</div>
        <input type="file" id="file" ref={attachFileRef} multiple />
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
