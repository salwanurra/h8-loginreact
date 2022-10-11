import "./App.css";
import 'antd/dist/antd.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
