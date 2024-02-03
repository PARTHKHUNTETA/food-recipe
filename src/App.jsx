import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Error from "./Components/Error";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";


function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe-detail/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
