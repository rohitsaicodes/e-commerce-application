import "./App.css";
import logo from "./logo.png";
import {Routes, Route} from 'react-router-dom'; 
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route
          path="/"
          element={
              <h1>Test</h1>
          }
        />
        <Route path="mockapi" element={<Mockman />} />
        </Routes>
    </div>
  );
}

export default App;
