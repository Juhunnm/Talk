// import { useContext } from "react";
import "./Editor.css";
import { useRef, useState } from "react";

const Editor = ({ onSubmit }) => {
  const [input, setInput] = useState({
    createdDate: new Date().getTime(),
    content1: "",
    content2: "",
    userName: "test",
  });
  const contentRef = useRef();

  const onChangeContent = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInput({ ...input, [name]: value });
  };

  const onSubmitButtonClick = () => {
    onSubmit(input);
  };
  return (
    <div className="Editor">
      <section className="topic1_section">
        <h4>1 Topic</h4>
        <input
          name="content1"
          ref={contentRef}
          onChange={onChangeContent}
          value={input.content1}
          placeholder="new topic1..."
        />
        VS
      </section>
      <section className="topic2_section">
        <h4>2 Topic</h4>
        <input
          name="content2"
          onChange={onChangeContent}
          value={input.content2}
          placeholder="new topic2..."
        />
      </section>

      <button onClick={onSubmitButtonClick}>ADD</button>
    </div>
  );
};

export default Editor;
