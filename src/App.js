import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
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
<<<<<<< HEAD
=======
        <Route path="/admin/form/phase1" element={<FormPhaseOne />} />
        {/* <div className="App">
        </div> */}
>>>>>>> 38d13750f4f63028211be9d671e5407353b6bf0d
      </Routes>
    </BrowserRouter>
  );
}

export default App;
