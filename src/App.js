import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginAdmin from "./pages/admin/loginAdmin";
import AdminDashboard from "./pages/admin";
import { CodeEditor } from "./components/CodeEditor/codeEditor";
import FormPhaseOne from "./components/Forms/formPhase1";
import PhaseOneProvider from "./hooks/PhaseContext";
import AllQuestions from "./pages/admin/questions";
import PostulatesPhase1 from "./pages/admin/postulatesPhase1";
import Description from "./pages/description";
import { SessionProvider } from "./context/SessionContext";
import StageOne from "./pages/stage1";
import AssignedChallenge from "./pages/assignedChallenge";
import StageOneCode from "./pages/stage1/stageOneCode";
import StageOneSolutions from "./pages/stage1/stageOneSolutions";
import Login from "./pages/login";
import ContinuousImprovement from "./pages/stage3";
import Evaluation from "./pages/stage3/stageEvaluation";

function App() {
  return (
    <SessionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/AssignedChallenge" element={<AssignedChallenge />} />
          <Route path="/stage1/StageOneCode" element={<StageOneCode />} />
          <Route
            path="/stage1/StageOneSolutions"
            element={<StageOneSolutions />}
          />
          <Route path="/loginAdmin" element={<LoginAdmin />} />
          <Route path="/state-one" element={<StageOne />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/form/phase1" element={<FormPhaseOne />} />
          <Route path="/admin/phase1/questions" element={<AllQuestions />} />
          <Route
            path="/admin/phase1/postulates"
            element={<PostulatesPhase1 />}
          />
          <Route
            path="/state-tree/continuousImprovement"
            element={<ContinuousImprovement />}
          />
          <Route path="/state-tree/evaluation" element={<Evaluation />} />
        </Routes>
      </BrowserRouter>
    </SessionProvider>
  );
}

export default App;
