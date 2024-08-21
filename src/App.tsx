import { AppRoutes } from "./routes/app.routes";
import { AuthProvider } from "./contexts/AuthContext";

import "./global.scss";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
