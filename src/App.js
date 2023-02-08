import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MultipleChoice } from "./pages/multipleChoice";
// import LoginAdmin from "./pages/admin/loginAdmin";
import AdminDashboard from "./pages/admin";
import { CodeEditor } from "./pages/codeEditor";
import FormPhaseOne from "./components/forms/formPhase1";
import PhaseOneProvider from "./hooks/PhaseContext";
import AllQuestions from "./pages/admin/questions";
import PostulatesPhase1 from "./pages/admin/postulatesPhase1";
import Login from "./pages/login";

function App() {
  return (
    <PhaseOneProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MultipleChoice />} />
          <Route path="/login" element={<MultipleChoice />} />
          <Route path="/loginAdmin" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/form/phase1" element={<FormPhaseOne />} />
          <Route path="/admin/phase1/questions" element={<AllQuestions />} />
          <Route
            path="/admin/phase1/postulates"
            element={<PostulatesPhase1 />}
          />
          <Route path="/codeEditor" element={<CodeEditor />} />
        </Routes>
      </BrowserRouter>
    </PhaseOneProvider>
  );
}

export default App;
