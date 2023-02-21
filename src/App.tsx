import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "./pages/404";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
