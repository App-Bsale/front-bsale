import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginAdmin from "./pages/admin/loginAdmin";
import AdminDashboard from "./pages/admin";
import { CodeEditor } from "./pages/codeEditor";
import FormPhaseOne from "./components/forms/formPhase1";
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

function App() {
  return (
    <SessionProvider>
      <PhaseOneProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/AssignedChallenge" element={<AssignedChallenge />} />
            <Route path="stage1/StageOneCode" element={<StageOneCode />} />
            <Route
              path="stage1/StageOneSolutions"
              element={<StageOneSolutions />}
            />
            <Route path="/loginAdmin" element={<LoginAdmin />} />

            <Route path="/state-one" element={<StageOne />} />

            {/* <Route path="/description-test" element={<Description />} /> */}

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
    </SessionProvider>
  );
}

export default App;
