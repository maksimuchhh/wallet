import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Integration from "./pages/Integration";
import MonobankAuth from "./pages/MonobankAuth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/monobank/auth" element={<MonobankAuth />} />
      </Routes>
    </div>
  );
}

export default App;
