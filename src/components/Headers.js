import React, { useState } from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../styles/HeaderStyles.css";
const Headers = () => {
  const [mobileOpen, setmobileOpen] = useState(false);

  //handle menu click
  const handleDrawerToggle = () => {
    setmobileOpen(!mobileOpen);
  };

  //menu drawer
  const drawer = (
    <Box onclick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2}}
      >
        <FastfoodIcon />
        My Restaurant
      </Typography>
      <Box>
        <ul className="mobile-navigation">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>Menu</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </Box>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick= {handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <FastfoodIcon />
              My Restaurant
            </Typography>
            <Divider />
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temperory"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" },
          "&  .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "240px"
          } }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
         <Toolbar/>
        </Box>
      </Box>
    </>
  );
};

export default Headers;
