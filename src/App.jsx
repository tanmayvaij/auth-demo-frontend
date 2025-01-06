import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainContext from "./context";
import Profile from "./pages/Profile";

const RoutesWithToken = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Profile />} />
      <Route exact path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

const RoutesWithoutToken = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default function App() {
  const authtoken = localStorage.getItem("authtoken");

  return (
    <MainContext>
      <BrowserRouter>
        {authtoken ? <RoutesWithToken /> : <RoutesWithoutToken />}
      </BrowserRouter>
    </MainContext>
  );
}
