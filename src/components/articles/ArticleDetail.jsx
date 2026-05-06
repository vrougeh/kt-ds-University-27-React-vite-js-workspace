import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../../http/articles/fetchArticles";
import { handleFileDownload } from "../../utils/download";

export const ArticleDetail = () => {
  const { id } = useParams(); //{id: ~~}

  const [article, setArticle] = useState();

  useEffect(() => {
    const loadArticleById = async () => {
      const articleResult = await fetchArticleById(id);
      if (!articleResult.error) {
        setArticle(articleResult);
      } else {
        alert(articleResult.error);
      }
    };
    loadArticleById();
  }, [id]);

  if (!article) {
    return <div>불러오는중....</div>;
  }
  console.log(article);

  return (
    <div className="wrapper">
      {id}게시글의 상세 내용입니다.
      <div>{article.id}</div>
      <div>{article.subject}</div>
      <div>{article.content}</div>
      <div>
        {article.name}({article.email})
      </div>
      <div>{article.viewCnt}</div>
      <div>{article.crtDt}</div>
      <div>{article.mdfyDt}</div>
      <ul>
        {article.files.map((f) => (
          <li key={`${f.fileNum}_${f.fileGroupId}`}>
            <a
              //   파일 강제 다운로드
              onClick={handleFileDownload.bind(
                this,
                `http://192.168.211.28:8080/file/${f.fileGroupId}/${f.fileNum}`,
              )}
            >
              {f.displayName} ({f.fileLength} bytes)
            </a>
            <a
              // 파일 보기 또는 다운로드
              target="_blank"
              href={`http://192.168.211.28:8080/file/${f.fileGroupId}/${f.fileNum}`}
            >
              {f.displayName} ({f.fileLength} bytes)
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
