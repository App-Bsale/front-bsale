import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginAdmin from "./pages/admin/loginAdmin";
import AdminDashboard from "./pages/admin";
import FormPhaseOne from "./components/Forms/formPhase1";
import AllQuestions from "./pages/admin/questions";
import PostulatesPhase1 from "./pages/admin/postulatesPhase1";
import { SessionProvider } from "./context/SessionContext";
import StageOne from "./pages/stage1";
import AssignedChallenge from "./pages/assignedChallenge";
import StageOneCode from "./pages/stage1/stageOneCode";
import StageOneSolutions from "./pages/stage1/stageOneSolutions";
import Login from "./pages/login";
import ContinuousImprovement from "./pages/stage3";
import Evaluation from "./pages/stage3/stageEvaluation";
import Results from "./pages/results";
import ProtectedRoutes from "./components/router/ProtectedRoutes";
import Requirements from './pages/stage2'
import { StageOneOptions } from './pages/stage1/stageOneOptions'

function App() {
  return (
    <SessionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/loginAdmin" element={<LoginAdmin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/form/phase1" element={<FormPhaseOne />} />
            <Route path="/admin/phase1/questions" element={<AllQuestions />} />
            <Route
              path="/admin/phase1/postulates"
              element={<PostulatesPhase1 />}
            />
            <Route path="/AssignedChallenge" element={<AssignedChallenge />} />
            <Route path="/stage1" element={<StageOne />} />
            <Route path="/stage1/StageOneOptions" element={<StageOneOptions />} />
            <Route path="/stage1/StageOneCode" element={<StageOneCode />} />
            <Route
              path="/stage1/StageOneSolutions"
              element={<StageOneSolutions />}
            />
            <Route path="/stage2/requirements" element={<Requirements />} />
            <Route
              path="/stage3/codeReview"
              element={<ContinuousImprovement />}
            />
            <Route path="/stage3/evaluation" element={<Evaluation />} />
            <Route path="/results" element={<Results />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </SessionProvider>
  );
}

export default App;
