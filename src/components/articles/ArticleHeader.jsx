const ArticleHeader = () => {
  return (
    <tr className="tasks-header">
      <th className="id">id</th>
      <th className="subject">subject</th>
      {/* <th className="content">content</th> */}
      {/* <th className="email">email</th> */}
      <th className="viewCnt">viewCnt</th>
      <th className="crtDt">crtDt</th>
      {/* <th className="mdfyDt">mdfyDt</th> */}
      <th className="name">name</th>
    </tr>
  );
};
export default ArticleHeader;
