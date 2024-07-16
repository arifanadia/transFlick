import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import DashBoard from "./Layout/DashBoard";
import UserHome from "./pages/User-Dashboard-Pages/Home";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/dash-board" element={<DashBoard />}>

          <Route path="/dash-board" element={<UserHome />} />
        </Route>
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;