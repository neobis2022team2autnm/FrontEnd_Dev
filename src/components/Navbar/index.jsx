import React, { useContext, useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import {useNavigate} from 'react-router-dom'
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
 
const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate()

  const handleSingOut = async () => {
    try {
      await logOut();
      navigate("/signin")
    } catch (err) {
      console.log(err);
    }
  };

  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#607D8B", position: "static" }}>
        <Toolbar sx={{ width: "1200px", margin: "0 auto" }}>
          <Link to="/">
            <TravelExploreIcon sx={{ transform: "scale(2)" }} />
          </Link>
          <>
            <Tabs
              sx={{ marginLeft: "auto" }}
              indicatorColor="secondary"
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              <Tab label="Гостинцы" />
              <Tab label="Рестораны" />
              <Tab label="Карта" />
              <Tab label="Контакты" />
            </Tabs>
            {user?.displayName ? (
              <Button
                sx={{ marginLeft: "auto" }}
                variant="contained"
                onClick={handleSingOut}
              >
                Log Out
              </Button>
            ) : (
              <Link to="/signin">
                <Button sx={{ marginLeft: "auto" }} variant="contained">
                  Sign In
                </Button>
              </Link>
            )}
          </>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
