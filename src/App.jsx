import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AdminLayout from "./Layouts/AdminLayout";
import Buku from "./Pages/Buku";
import DataBooking from "./Pages/DataBooking";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/buku" exact element={<Buku />} />
          <Route path="/data-booking" exact element={<DataBooking />} />
          <Route path="/admin/*" exact element={<AdminLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
