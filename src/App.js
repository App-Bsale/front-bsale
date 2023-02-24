import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginAdmin from "./pages/admin/loginAdmin";
import AdminDashboard from "./pages/admin";
import FormPhaseOne from "./components/Forms/formPhase1";
import AllQuestions from "./pages/admin/questions";
import PostulantesPhase1 from "./pages/admin/postulantesPhase1";
import { SessionProvider } from "./context/SessionContext";
import StageOne from "./pages/stage1";
import AssignedChallenge from "./pages/assignedChallenge";
import StageOneCode from "./pages/stage1/stageOneCode";
import StageOneSolutions from "./pages/stage1/stageOneSolutions";
import Login from "./pages/login";
import ContinuousImprovement from "./pages/stage3";
import Evaluation from "./pages/stage3/stageEvaluation";
import Results from "./pages/results";
import Requirements from "./pages/stage2";
import { StageOneOptions } from "./pages/stage1/stageOneOptions";
import TableDataEvaluationUsers from "./components/tableDataEvaluationUsers/tableDataEvaluationUsers";
import PhaseOneProvider from "./hooks/PhaseContext";
import StagePage from "./pages/stage1/stage";
import ApplicantsAdmin from "./pages/admin/applicantsAdmin";

import MultipleChoice from "./pages/stage1/stageOneOptions";
import { useThemeContext } from "./context/ThemeContext";
import {
  AdminProtectedRoutes,
  UserProtectedRoutes,
} from "./components/router/ProtectedRoutes";

function App() {
  const { contextTheme } = useThemeContext();

  return (
    <div id={contextTheme}>
      <SessionProvider>
        <PhaseOneProvider>
          <BrowserRouter>
            <Routes>
              {/* Rutas del usuario normal */}
              <Route path="/" element={<Login />} />
              <Route element={<UserProtectedRoutes user={"user"} />}>
                <Route
                  path="/AssignedChallenge"
                  element={<AssignedChallenge />}
                />
                <Route path="/stage1" element={<StageOne />} />
                <Route path="/stagePageOne" element={<StagePage />} />
                <Route
                  path="/stage1/StageOneOptions"
                  element={<MultipleChoice />}
                />
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

              {/* rutas del admin */}
              <Route path="/admin" element={<LoginAdmin />} />
              <Route element={<AdminProtectedRoutes user={"admin"} />}>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/form/phase1" element={<FormPhaseOne />} />
                <Route path="/admin/users" element={<ApplicantsAdmin />} />
                <Route
                  path="/admin/phase1/questions"
                  element={<AllQuestions />}
                />
                <Route
                  path="/admin/phase1/postulates"
                  element={<PostulantesPhase1 />}
                />
                <Route
                  path="/admin/tableDataEvaluationUsers"
                  element={<TableDataEvaluationUsers />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </PhaseOneProvider>
      </SessionProvider>
    </div>
  );
}

export default App;
