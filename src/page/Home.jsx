import Content from "../component/Content";
import Header from "../component/Header";
import "./Home.css";
import TalkList from "../component/TalkList";
import { useContext } from "react";
import { TalkStateContext } from "../App";

const Home = () => {
  const data = useContext(TalkStateContext);
  return (
    <div className="Home">
      <Header />
      <Content />
      <TalkList data={data} />
    </div>
  );
};

export default Home;
