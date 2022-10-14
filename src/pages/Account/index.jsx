import { Button } from "@mui/material";
import React from "react";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { logOut, user } = UserAuth();

  const navigate = useNavigate();

  const handleSingOut = async () => {
    try {
      navigate("/signin");
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };


  
  return (
    <div className="container">
      <h1>Account</h1>
      <div>
        <p>Welome , {user?.displayName}</p>
      </div>
      <Button
        onClick={handleSingOut}
        sx={{ marginLeft: "auto" }}
        variant="contained"
      >
        Log Out
      </Button>
    </div>
  );
};

export default Account;
