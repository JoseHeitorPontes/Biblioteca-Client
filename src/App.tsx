import { BrowserRouter, Route, Routes } from "react-router";

import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
