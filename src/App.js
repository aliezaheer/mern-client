import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";
import UserDetails from "./components/UserDetails";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<UserDetails />} />
        <Route path="/users-list" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:_id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
