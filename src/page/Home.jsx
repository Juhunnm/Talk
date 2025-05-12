import Content from "../component/Content";
import Header from "../component/Header";
import "./Home.css";
import TopicList from "../component/TalkList";
import { useContext } from "react";
import { TalkDispatchContext, TalkStateContext } from "../App";

const Home = () => {
  const data = useContext(TalkStateContext);
  return (
    <div className="Home">
      <Header />
      <Content />
      <TopicList data={data} />
    </div>
  );
};

export default Home;
