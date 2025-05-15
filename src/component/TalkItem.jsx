import { useNavigate } from "react-router-dom";
import "./TalkItem.css";
import { useState } from "react";

const TalkItem = ({
  id,
  createdDate,
  userName,
  title,
  likes,
  views,
  tags,
  status,
  votes,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const nav = useNavigate();

  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  // const getStatus = (createdDate) => {
  //   const now = new Date();
  //   const created = new Date(createdDate);
  //   const hoursPassed = (now - created) / (1000 * 60 * 60);

  //   return hoursPassed >= 3 ? "closed" : "waiting"; // 3시간 기준
  // };
  // const statusText - getStatus(createdDate);
  // <span className={`status ${statusText}`}>{statusText.toUpperCase()}</span>
  // util에 분리해도됨
  // export const getAutoStatus = (createdDate, deadlineHours = 3) => {
  //   const now = new Date();
  //   const created = new Date(createdDate);
  //   return (now - created) / (1000 * 60 * 60) >= deadlineHours ? "closed" : "waiting";
  // };
  return (
    <div className="TalkItem">
      <section className="talk_main">
        {/* top */}
        <div className="top_meta">
          <span className="date">
            {new Date(createdDate).toLocaleDateString()}
          </span>
          <span className={`status ${status}`}>{status.toUpperCase()}</span>
          <button className="edit_btn" onClick={() => nav(`/edit/${id}`)}>
            ✏️
          </button>
        </div>
        {/* mid */}
        <div className="title" onClick={() => nav(`/talk/${id}`)}>
          <span>{title.content1}</span>
          <span style={{ color: "#aaa", fontSize: "18px" }}>VS</span>
          <span>{title.content2}</span>
        </div>
        {/* bottom */}
        <div className="meta_info">
          <div className="info">
            <span
              className="likes"
              onClick={handleLike}
              style={{ cursor: "pointer" }}
            >
              {isLiked ? "❤️" : "🤍"} {likes + (isLiked ? 1 : 0)}
            </span>
            <span className="views">👁 {views}</span>
            <div className="tags">
              {tags.map((tag, idx) => (
                <span key={idx} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <span className="user">by {userName}</span>
        </div>
      </section>

      <section className="talk_vote">
        <span>🅰️ {votes.content1} votes</span>
        <span>🅱️ {votes.content2} votes</span>
      </section>
    </div>
  );
};

export default TalkItem;
