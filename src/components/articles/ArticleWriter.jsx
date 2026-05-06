import { useRef, useState } from "react";
import { Alert } from "../ui/Modals";
import { isString } from "../../utils/type";
import { useDispatch, useSelector } from "react-redux";
import { articleThunks } from "../../stores/toolkit/slices/articleSlice";

const ArticleWriter = () => {
  const [viewMode, setViewMode] = useState("button");
  const { token } = useSelector((store) => store.user);
  const {
    error: { write: addError },
  } = useSelector((store) => store.article);

  const toolkitDispatcher = useDispatch();

  const subjectRef = useRef();
  const contentRef = useRef();
  const attachFileRef = useRef();

  const alertRef = useRef();

  if (!token) {
    return <></>;
  }

  // 저장을 클릭하면 입력했던 값을 가져와 출력한다.
  const onSaveButtonClickHandler = async () => {
    if (!subjectRef.current.value) {
      alertRef.current.showModal("제목을 입력해주세요");
      return;
    }
    if (!contentRef.current.value) {
      alertRef.current.showModal("내용을 입력해주세요");
      return;
    }

    toolkitDispatcher(
      articleThunks.write(
        subjectRef.current.value,
        contentRef.current.value,
        attachFileRef.current.files,
      ),
    );
    subjectRef.current.value = "";
    contentRef.current.value = "";
    attachFileRef.current.value = "";
  };
  const onViewChangeButtonClickHandler = (viewName) => {
    setViewMode(viewName);
  };

  return (
    <div className="article-writer">
      {viewMode === "button" && (
        <button
          type="button"
          onClick={onViewChangeButtonClickHandler.bind(this, "form")}
        >
          글쓰기
        </button>
      )}
      {viewMode === "form" && (
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
            <button
              type="button"
              onClick={onViewChangeButtonClickHandler.bind(this, "button")}
            >
              취소
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default ArticleWriter;
