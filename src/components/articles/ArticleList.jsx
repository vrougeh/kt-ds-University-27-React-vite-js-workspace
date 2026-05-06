import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ArticleList = () => {
  // console.dir(articleData);
  const { list: articleData } = useSelector((store) => store.article);
  return (
    <tbody>
      {articleData.map((data) => (
        <tr key={data.id}>
          <td className="id">{data.id}</td>
          <td className="subject">
            <Link to={`/article/${data.id}`}>{data.subject}</Link>
          </td>
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
    </tbody>
  );
};
export default ArticleList;
