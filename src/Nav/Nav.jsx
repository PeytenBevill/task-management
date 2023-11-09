import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
import {
  SquaresFour,
  ChartPieSlice,
  UsersThree,
  File,
  GearSix,
} from "@phosphor-icons/react";
import "./nav.css";

const Nav = ({ setDemoClicked }) => {
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleActive = (link) => {
    setActiveLink(link);
  };

  const handleHome = () => {
    setDemoClicked(false);
    navigate("/");
  };

  // Check if the current location matches the button's path
  useEffect(() => {
    const path = location.pathname.substring(1); // Remove the leading "/"
    setActiveLink(path);
  }, [location.pathname]);

  return (
    <div className="nav-element">
      <img
        onClick={handleHome}
        src="/logo.svg"
        alt="Black polygon with a white lowercase t and a yellow period next to it"
      />
      <div className="buttons">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <h3
            className={`dash button ${
              activeLink === "dashboard" ? "active" : ""
            }`}
            onClick={() => handleActive("dashboard")}
          >
            <SquaresFour size={22} />
            Dashboard
          </h3>
        </Link>
        <Link to="/analytics" style={{ textDecoration: "none" }}>
          <h3
            className={`analytics button ${
              activeLink === "analytics" ? "active" : ""
            }`}
            onClick={() => handleActive("analytics")}
          >
            <ChartPieSlice size={22} />
            Analytics
          </h3>
        </Link>
        <Link to="/teams" style={{ textDecoration: "none" }}>
          <h3
            className={`teams button ${
              activeLink === "teams" ? "active" : ""
            }`}
            onClick={() => handleActive("teams")}
          >
            <UsersThree size={22} />
            Teams
          </h3>
        </Link>
        <Link to="/documents" style={{ textDecoration: "none" }}>
          <h3
            className={`documents button ${
              activeLink === "documents" ? "active" : ""
            }`}
            onClick={() => handleActive("documents")}
          >
            <File size={22} />
            Documents
          </h3>
        </Link>
        <Link to="/settings" style={{ textDecoration: "none" }}>
          <h3
            className={`settings button ${
              activeLink === "settings" ? "active" : ""
            }`}
            onClick={() => handleActive("settings")}
          >
            <GearSix size={22} />
            Settings
          </h3>
        </Link>
      </div>
      <TextField
        id="outlined-read-only-input"
        label="Workspace"
        defaultValue="Placeholder Company"
        InputProps={{
          readOnly: true,
        }}
        sx={{ marginTop: "40%", marginLeft: "20%" }}
      />
    </div>
  );
};

export default Nav;
