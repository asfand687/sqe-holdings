import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Login from './Pages/Login';
import Homepage from './Pages/Homepage';
import Welcome from './Pages/Welcome';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
