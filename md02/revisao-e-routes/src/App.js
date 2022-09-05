import { Page } from "./revisao/Page";
import { Home } from "./revisao/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Page />} />
    </Routes>
  );
}

export default App;
