import "./Content.css";

const Content = () => {
  return (
    <div className="Content">
      <h2 className="date">{`${new Date().getHours()} : ${new Date().getMinutes()}:00`}</h2>
      <h2 className="topic">topic vs topic</h2>
      <button className="button"> Enter</button>
      <div className="user_name"> userName</div>
    </div>
  );
};

export default Content;
