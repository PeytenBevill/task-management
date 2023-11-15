import { useState } from "react";
import Nav from "../src/Nav/Nav";
import Login from "../src/Login/Login";
import UserInfo from "./UserInfo/UserInfo";
import Dashboard from "./Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Settings from "./Settings/Settings";
import "./App.css";
import Analytics from "./Analytics/Analytics";
import Teams from "./Teams/Teams";


function App() {
  const [demoClicked, setDemoClicked] = useState(false);
  return (
    <div className="page-grid">
      <Nav className="nav" setDemoClicked={setDemoClicked} />
      <Routes>
        <Route
          path="/"
          element={<Login className="login" setDemoClicked={setDemoClicked} />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard className="dashboard" />}
        />

        <Route 
        path="/settings" element={<Settings />} 
        />

        <Route path="/analytics" element={<Analytics />} />

        <Route path="/teams" element={<Teams />} />

      </Routes>
      {demoClicked && <UserInfo className="userInfo" />}
    </div>
  );
}

export default App;
