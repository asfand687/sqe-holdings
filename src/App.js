import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Login from './Pages/Login';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
