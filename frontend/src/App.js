import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <main>
                <Container>
                    <h1> Welcome </h1>
                </Container>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;
