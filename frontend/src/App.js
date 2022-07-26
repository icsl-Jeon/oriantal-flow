import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import LandingPage from "./pages/LandingPage";
import FeedPage from "./pages/FeedPage";
import LandingHeader from "./components/LandingHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <LandingHeader />
        <main className="py-1">
          <Container>
            <Routes>
              <Route path="/" element={<LandingPage />} exact />
              <Route path="/feed" element={<FeedPage />} exact />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
