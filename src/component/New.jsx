import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Header from "./Header";
import { useContext } from "react";
import { TalkDispatchContext } from "../App";
import Editor from "./Editor";

const New = () => {
  const { onCreate } = useContext(TalkDispatchContext);

  const nav = useNavigate();

  const onSubmit = (input) => {
    onCreate(input.createdDate, input.content1, input.content2, input.userName);
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
