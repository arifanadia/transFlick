import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import DashBoard from "./Layout/DashBoard";
import UserHome from "./pages/User-Dashboard-Pages/Home";
import AdminHome from "./pages/Admin-Dashboard-pages";
import AgentHome from "./pages/Agent-Dashboard-Pages";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/dash-board" element={<DashBoard />}>

          {/* user Routes */}
          <Route path="/dash-board" element={<UserHome />} />

          {/* admin Routes */}
          <Route path="/dash-board" element={<AdminHome />} />

          {/* Agent Routes */}
          <Route path="/dash-board" element={<AgentHome />} />
          
        </Route>
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;