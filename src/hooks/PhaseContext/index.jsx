import { createContext, useState } from "react";

export const PhaseContext = createContext();

const PhaseOneProvider = ({ children }) => {
  const [phaseOneGlobal, setPhaseOneGlobal] = useState({});

  return (
    <PhaseContext.Provider value={{ phaseOneGlobal, setPhaseOneGlobal }}>
      {children}
    </PhaseContext.Provider>
  );
};

export default PhaseOneProvider;
