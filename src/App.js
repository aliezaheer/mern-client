import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<UserDetails />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
