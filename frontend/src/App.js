import logo from './logo.svg';
import './App.css';
import LandingPage from "./pages/LandingPage";
import FeedPage from "./pages/FeedPage"
import {BrowserRouter, Route, Routes, Router} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage/>}>
                    </Route>
                    <Route path="/feed" element={<FeedPage/>}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
