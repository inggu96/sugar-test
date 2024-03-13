import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Calculator } from "./components/Calculator";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Calculator />} />
    </Routes>
  );
}
