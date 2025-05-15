// import { useContext } from "react";
import "./Editor.css";
import { useEffect, useRef, useState } from "react";

const Editor = ({ data, onSubmit }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    title: {
      content1: "",
      content2: "",
    },
    userName: "testuser",
    tags: "",
  });
  const contentRef = useRef();

  useEffect(() => {
    if (data) {
      setInput({
        ...data,
      });
    }
  }, [data]);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "content1" || name === "content2") {
      setInput({
        ...input,
        title: {
          ...input.title,
          [name]: value,
        },
      });
    } else {
      setInput({
        ...input,
        [name]: value,
      });
    }
  };

  const handleSubmit = () => {
    const { createdDate, title, userName, tags } = input;
    const { content1, content2 } = title;
    onSubmit({
      createdDate,
      userName,
      title: { content1, content2 },
      views: 0,
      likes: 0,
      votes: { content1: 0, content2: 0 },
      tags: tags.split(",").map((t) => t.trim()),
      status: "waiting",
    });
  };
  return (
    <div className="Editor">
      <section>
        <h4>Topic 1</h4>
        <input
          name="content1"
          value={input.title.content1}
          onChange={onChange}
          placeholder="예: 고양이가 귀엽다"
          ref={contentRef}
        />
      </section>
      <section>
        <h4>Topic 2</h4>
        <input
          name="content2"
          value={input.title.content2}
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
