import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { BellSimple, Sun } from "@phosphor-icons/react";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import "./userInfo.css";

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState([]);
  const { darkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();

  const handleTheme = () => {
    toggleDarkMode();
  };

  const handleSettings = () => {
    navigate("/settings");
  };

  return (
    <div className="user-box">
      <Avatar
        alt="Demo Picture"
        src=""
        sx={{ width: 56, height: 56, backgroundColor: "black" }}
        className="avatar"
        onClick={handleSettings}
      />
      <p className="name">User Name</p>
      <p className="position">Position</p>
      <BellSimple size={22} weight="fill" className="bell" />
      <Sun size={22} className="sun" onClick={handleTheme} />
    </div>
  );
};

export default UserInfo;
