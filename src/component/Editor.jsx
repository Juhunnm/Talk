// import { useContext } from "react";
import "./Editor.css";
import { useRef, useState } from "react";

const Editor = ({ onSubmit }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    content1: "",
    content2: "",
    userName: "testuser",
    tags: "",
  });

  const contentRef = useRef();

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = () => {
    const { createdDate, content1, content2, userName, tags} = input;
    onSubmit({
      createdDate,
      userName,
      title: { content1, content2 },
      views: 0,
      likes: 0,
      votes: { content1: 0, content2: 0 },
      tags: tags.split(",").map((t) => t.trim()),
      status:"waiting",
    });
  };
  return (
    <div className="Editor">
      <section>
        <h4>Topic 1</h4>
        <input
          name="content1"
          value={input.content1}
          onChange={onChange}
          placeholder="예: 고양이가 귀엽다"
          ref={contentRef}
        />
      </section>
      <section>
        <h4>Topic 2</h4>
        <input
          name="content2"
          value={input.content2}
          onChange={onChange}
          placeholder="예: 강아지가 귀엽다"
        />
      </section>
      <section>
        <h4>태그 (쉼표로 구분)</h4>
        <input
          name="tags"
          value={input.tags}
          onChange={onChange}
          placeholder="예: 반려동물, 토론"
        />
      </section>
      <button onClick={handleSubmit}>추가하기</button>
    </div>
  );
};

export default Editor;
