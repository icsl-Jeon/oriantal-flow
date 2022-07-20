import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import {Container} from "react-bootstrap";
import LandingPage from "./pages/LandingPage";

function App() {
    return (
        <div className="App">
            <LandingPage/>
            <Footer/>
        </div>
    );
}

export default App;
