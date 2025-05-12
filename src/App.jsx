import { Routes, Route } from "react-router-dom";
import "./App.css";
import Discuss from "./page/Discuss";
import Home from "./page/Home";
import NotFound from "./page/NotFound";
import { createContext, useReducer, useRef } from "react";
import New from "./component/New";

const mockData = [
  //주제,사용자,시간,
  {
    id: 1,
    createdDate: new Date().getTime(),
    content1: "topic1",
    content2: "topic2",
    userName: "username1",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    content1: "topic1",
    content2: "topic2",
    userName: "username2",
  },
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

  const onCreate = (createdDate, content1, content2, userName) => {
    dispath({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        content1,
        content2,
        userName,
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
              <Route path="/discuss:id" element={<Discuss />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TalkDispatchContext.Provider>
        </TalkStateContext.Provider>
      </div>
    </>
  );
};

export default App;
