const ArticleList = ({ articleData }) => {
  return (
    <>
      {articleData.articles.map((data) => (
        <tr>
          <td className="id">{data.id}</td>
          <td className="subject">{data.subject}</td>
          {/* <td className="content">{data.content}</td> */}
          {/* <td className="email">{data.email}</td> */}
          <td className="viewCnt">{data.viewCnt}</td>
          <td className="crtDt">{data.crtDt}</td>
          {/* <td className="mdfyDt">{data.mdfyDt}</td> */}
          <td className="name">
            {data.membersVO.name}({data.email})
          </td>
        </tr>
      ))}
    </>
  );
};
export default ArticleList;
