import "./TalkList.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import TalkItem from "./TalkItem";

const TalkList = ({ data }) => {
  const nav = useNavigate();

  return (
    <div className="TalkList">
      <div className="menu_bar">
        <select>
          <option value="lastest">최신순</option>
          <option value="oldest">오래된 순</option>
        </select>
        <Button onClick={() => nav("/new")} text={"ADD"} />
      </div>
      <div className="wrapper">
        {data.map((item) => (
          <TalkItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TalkList;
