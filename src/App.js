import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Register from './Pages/Register';
import Homepage from './Pages/Homepage';
import Welcome from './Pages/Welcome';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import UpdatePassword from './Pages/UpdatePassword';

function App() {
  return (
    <main>
      <Toaster />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/update-password" element={<UpdatePassword />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
