import "./Viewer.css";

const Viewer = ({ talk }) => {
  if (!talk) return null;

  const {
    createdDate,
    userName,
    title,
    likes,
    views,
    tags,
    status,
    votes,
  } = talk;

  return (
    <div className="Viewer">
      <div className="viewer_header">
        <h2>
          {title.content1} <span className="vs">VS</span> {title.content2}
        </h2>
        <div className="meta">
          <span>작성자: {userName}</span>
          <span>작성일: {new Date(createdDate).toLocaleString()}</span>
          <span className={`status ${status}`}>상태: {status}</span>
        </div>
      </div>

      <div className="viewer_body">
        <div className="viewer_stats">
          <span>❤️ 좋아요: {likes}</span>
          <span>👁 조회수: {views}</span>
          <div className="tags">
            {tags.map((tag, idx) => (
              <span className="tag" key={idx}>
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="votes">
          <div className="vote_box">
            <span>🅰️ {title.content1}</span>
            <span>{votes.content1}표</span>
          </div>
          <div className="vote_box">
            <span>🅱️ {title.content2}</span>
            <span>{votes.content2}표</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewer;
