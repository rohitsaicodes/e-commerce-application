import "./App.css";
import logo from "./logo.png";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import Button from "./components/atoms/Button";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={<Button name="btn" variant="outlined" />}
                />
                <Route path="mockapi" element={<Mockman />} />
            </Routes>
        </div>
    );
}

export default App;
