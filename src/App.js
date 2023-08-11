import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./routes/Main";
import "./app.css";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
