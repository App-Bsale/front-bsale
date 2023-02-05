import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MultipleChoice } from "./pages/multipleChoice";
import LoginAdmin from "./pages/admin/loginAdmin";
import AdminDashboard from "./pages/admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MultipleChoice />} />
        <Route path="/login" element={<MultipleChoice />} />
        <Route path="/loginAdmin" element={<LoginAdmin />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
