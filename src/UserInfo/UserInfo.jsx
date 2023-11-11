import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { BellSimple } from "@phosphor-icons/react";
import "./userInfo.css";

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState([]);
  const navigate = useNavigate();

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
    </div>
  );
};

export default UserInfo;
