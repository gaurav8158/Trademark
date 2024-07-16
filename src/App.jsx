import "./App.css";
import Homepage from "./page/Homepage";
import Register from "./page/Register";
import Login from "./page/Login";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
   
  );
};

export default App;
