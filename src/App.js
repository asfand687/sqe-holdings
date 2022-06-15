import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Register from './Pages/Register';
import Homepage from './Pages/Homepage';
import Welcome from './Pages/Welcome';
import Dashboard from './Pages/Dashboard';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
