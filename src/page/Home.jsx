import Content from "../component/Content";
import TopicItem from "../component/TopicItem";

const Home = () => {
  return (
    <div className="Home">
      home
      <Content />
      <div className="input">
        <select name="" id="">
          <option value="">카테고리 1</option>
          <option value="">카테고리 2</option>
          <option value="">카테고리 3</option>
        </select>
        <input placeholder="add topic..." />
        <button>ADD</button>
      </div>
      <hr />
      <TopicItem />
    </div>
  );
};

export default Home;
