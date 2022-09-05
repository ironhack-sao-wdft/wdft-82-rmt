import { Page } from "./revisao/Page";
import { Infos } from "./revisao/Infos";
import { Home } from "./revisao/Home";
import { Navbar } from "./revisao/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Page />} />
        <Route path="/movies/:id" element={<Infos />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
