import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";

function Placeholder({ title }) {
  return (
    <div style={{ padding: "40px" }}>
      <h1>{title}</h1>
      <p>This workspace will be built next.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/admin"
          element={<Placeholder title="Admin Dashboard" />}
        />

        <Route
          path="/pharmacist"
          element={<Placeholder title="Pharmacist Dashboard" />}
        />

        <Route
          path="/finance"
          element={<Placeholder title="Finance Dashboard" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;