import React, { useState } from "react";

const WidgetContext = React.createContext();

function Context({ children }) {
  const [step, setStep] = useState(1);

  return (
    <WidgetContext.Provider value={{ step, setStep }}>
      {children}
    </WidgetContext.Provider>
  );
}

export const useWidget = () => React.useContext(WidgetContext);

export default Context;
