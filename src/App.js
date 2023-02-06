import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import { Etapa1 } from "./components/etapa_1";
import { MultipleChoice } from "./pages/multipleChoice";
import LoginAdmin from "./pages/admin/loginAdmin";
import AdminDashboard from "./pages/admin";
import FormPhaseOne from "./components/forms/formPhase1";
import PhaseOneProvider from "./hooks/PhaseContext";
import AllQuestions from "./pages/admin/questions";
import PostulatesPhase1 from "./pages/admin/postulatesPhase1";

function App() {
  return (
    <PhaseOneProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MultipleChoice />} />
          <Route path="/login" element={<MultipleChoice />} />
          <Route path="/loginAdmin" element={<LoginAdmin />} />

          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/form/phase1" element={<FormPhaseOne />} />
          <Route path="/admin/phase1/questions" element={<AllQuestions />} />
          <Route
            path="/admin/phase1/postulates"
            element={<PostulatesPhase1 />}
          />
        </Routes>
      </BrowserRouter>
    </PhaseOneProvider>
  );
}

export default App;
