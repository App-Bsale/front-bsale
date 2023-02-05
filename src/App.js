import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import { Etapa1 } from "./components/etapa_1";
import { MultipleChoice } from "./pages/multipleChoice";
import LoginAdmin from "./pages/admin/loginAdmin";
import AdminDashboard from "./pages/admin";
import FormPhaseOne from "./components/forms/formPhase1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MultipleChoice />} />
        <Route path="/login" element={<MultipleChoice />} />
        <Route path="/loginAdmin" element={<LoginAdmin />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/form/phase1" element={<FormPhaseOne />} />
        {/* <div className="App">
        </div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
