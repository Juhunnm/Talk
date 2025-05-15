import { Routes, Route } from "react-router-dom";
import "./App.css";
import Talk from "./page/Talk";
import Home from "./page/Home";
import NotFound from "./page/NotFound";
import { createContext, useReducer, useRef } from "react";
import New from "./component/New";
import Edit from "./page/Edit";

const mockData = [
  //주제,사용자,시간,
  {
    id: 1,
    createdDate: new Date().getTime(),
    userName: "username1",
    title: {
      content1: "topic1 ",
      content2: "topic2",
    },
    views: 123,
    likes: 3,
    votes: {
      content1: 56,
      content2: 46,
    },
    tags: ["반려동물", "토론"],
    status: "waiting",
  },
  // {
  //   id: 2,
  //   createdDate: new Date().getTime(),
  //   content1: "topic1",
  //   content2: "topic2",
  //   userName: "username2",
  // },
];
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
  }
  return state;
}

export const TalkDispatchContext = createContext();
export const TalkStateContext = createContext();

const App = () => {
  const [data, dispath] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (newTalk) => {
    dispath({
      type: "CREATE",
      data: {
        id: idRef.current++,
        ...newTalk,
      },
    });
  };

  return (
    <>
      <div className="App">
        <TalkStateContext.Provider value={data}>
          <TalkDispatchContext.Provider value={{ onCreate }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path ='/edit/:id' element={<Edit />}/> 
              <Route path="/talk/:id" element={<Talk />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TalkDispatchContext.Provider>
        </TalkStateContext.Provider>
      </div>
    </>
  );
};

export default App;
