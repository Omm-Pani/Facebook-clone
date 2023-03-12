import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import LoggedinRoutes from "./routes/LoggedinRoutes";
import NotLoggedinRoutes from "./routes/NotLoggedinRoutes";
import Activate from "./pages/home/activate";
import Reset from "./pages/reset";
import CreatePostPopup from "./components/createPostPopup";
import { useSelector } from "react-redux";
function App() {
  const { user } = useSelector((state) => ({ ...state }));
  return (
    <div>
      <CreatePostPopup user={user} />
      <Routes>
        <Route element={<LoggedinRoutes />}>
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/" element={<Home />} exact />
          <Route path="/activate/:token" element={<Activate />} exact />
        </Route>
        <Route element={<NotLoggedinRoutes />}>
          <Route path="/login" element={<Login />} exact />
        </Route>
        <Route path="/reset" element={<Reset />} exact />
      </Routes>
    </div>
  );
}

export default App;
