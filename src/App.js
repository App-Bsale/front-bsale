import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import { Etapa1 } from "./components/etapa_1";
// import { MultipleChoice } from "./pages/multipleChoice";
import LoginAdmin from "./pages/admin/loginAdmin";
import AdminDashboard from "./pages/admin";
import Login from "./pages/login";
import FormPhaseOne from "./components/forms/formPhase1";
import PhaseOneProvider from "./hooks/PhaseContext";
import AllQuestions from "./pages/admin/questions";
import PostulatesPhase1 from "./pages/admin/postulatesPhase1";
import Description from "./pages/description";
import { SessionProvider } from "./context/SessionContext";
import AssignedChallenge from './pages/assignedChallenge'

function App() {
  return (
    <SessionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/AssignedChallenge" element={<AssignedChallenge />} />
          <Route path="/loginAdmin" element={<LoginAdmin />} />
          <Route path="/description-test" element={<Description />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/form/phase1" element={<FormPhaseOne />} />
          <Route path="/admin/phase1/questions" element={<AllQuestions />} />
          <Route
            path="/admin/phase1/postulates"
            element={<PostulatesPhase1 />}
          />
        </Routes>
      </BrowserRouter>
    </SessionProvider>
  );
}

export default App;
