import "./App.css";
import logo from "./logo.png";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import InputBar from "./components/molecules/InputBar";
import NavBar from "./components/organisms/NavBar";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<NavBar />} />
                <Route path="mockapi" element={<Mockman />} />
            </Routes>
        </div>
    );
}

export default App;
