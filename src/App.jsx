import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="flex w-screen h-full justify-center bg-white">
      <div className="w-full max-w-[375px] h-screen overflow-y-auto p-5 bg-[#F7F8F9] relative">
        <Routes>
          <Route index element={<Landing />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
