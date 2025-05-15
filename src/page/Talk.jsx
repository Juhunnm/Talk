import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { TalkStateContext } from "../App";
import Viewer from "../component/Viewer";
import Header from "../component/Header";

const Talk = () => {
  const params = useParams();
  const nav = useNavigate();
  const data = useContext(TalkStateContext);
  const [currentTalkItem, setCurrentTalkItem] = useState(null);

  useEffect(() => {
    const currentTalk = data.find(
      (item) => String(item.id) === String(params.id)
    );

    if (!currentTalk) {
      alert("존재하지 않는 Talk입니다...");
      nav("/", { replace: true });
    } else {
      setCurrentTalkItem(currentTalk);
    }
  }, [params.id, data, nav]);

  return (
    <div className="Talk">
      <Header />
      <Viewer talk={currentTalkItem} />
    </div>
  );
};

export default Talk;
