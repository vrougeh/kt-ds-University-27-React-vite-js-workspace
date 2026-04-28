import { useState } from "react";
import trendData from "./trend.json";
import TrendBox from "./TrandBox.jsx";
import TrendHeader from "./TrendHeader.jsx";
import TrendSelector from "./TrendSelector.jsx";
import TrendList from "./TrendList.jsx";
import TrendItem from "./TrendItem.jsx";

const TmdbMain = () => {
  const [{ sectionName, selectors, items }] = useState(trendData);
  const [select, setSelect] = useState(selectors);
  //   console.log(selectors);
  //   console.log(items[select]);

  const onSelectorButtonClickHandler = (select) => {
    setSelect(select);
  };

  return (
    <div className="wrapper">
      <ul className="tasks">
        <TrendBox>
          <TrendHeader>
            <h1>{sectionName}</h1>
            <TrendSelector
              onSelectorButtonClick={onSelectorButtonClickHandler}
              select={select}
            ></TrendSelector>
          </TrendHeader>
          <TrendList>
            {items[select]?.map((movie) => (
              <TrendItem key={movie.id} movie={movie} />
            ))}
          </TrendList>
        </TrendBox>
      </ul>
    </div>
  );
};
export default TmdbMain;
