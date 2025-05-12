// import './TalkItem.css'
const TalkItem = ({ createdDate, content1, content2 }) => {
  return <div>{`${createdDate}년 ${content1} VS ${content2}`}</div>;
};

export default TalkItem;
