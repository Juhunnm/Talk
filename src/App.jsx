import { Routes, Route } from "react-router-dom";
import "./App.css";
import Discuss from "./page/Discuss";
import Home from "./page/Home";
import NotFound from "./page/NotFound";
import Header from "./component/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discuss:id" element={<Discuss />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
