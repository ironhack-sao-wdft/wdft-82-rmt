import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { BeerPage } from "./pages/BeerPage";
import { CreateForm } from "./pages/CreateForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:beerId" element={<BeerPage />} />
        <Route path="/create-beer" element={<CreateForm />} />
      </Routes>
    </>
  );
}

export default App;
