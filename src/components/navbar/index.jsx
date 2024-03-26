// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";
import { anchorElReducer, navGateReducer } from "../../redux/navSlice";

const pages = ["History", "Repentance","Evidence", "Revelation",'Summary'];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Navbar = () => {
  const navigate = useNavigate();
  const { open, anchorEl } = useSelector((state) => state.nav);
  const dispatch = useDispatch();
  // const [anchorElUser, setAnchorElUser] = useState(null);

  const handleDrawerOpen = () => {
    dispatch(navGateReducer(true));
  };

  const handleOpenUserMenu = (event) => {
    // setAnchorElUser(event.currentTarget);
    dispatch(anchorElReducer(event.currentTarget));
  };

  const handleCloseUserMenu = () => {
    // setAnchorElUser(null);
    dispatch(anchorElReducer(null));
  };

  // const handleNavigation = (settings) => {
  //   navigate(settings.toLowerCase().replace(/ /g, "-"));
  //   setAnchorElUser(null);
  // };

  const handleNavigation = (settings) => {
    dispatch(anchorElReducer(null));
    navigate(settings.toLowerCase().replace(/ /g, "-"));
  };

  return (
    <AppBar
      position="fixed"
      open={open}
      sx={{ opacity: 0.5, backgroundColor: "inherit" }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon sx={{ color: "black" }} />
        </IconButton>
        <Typography
          variant="h2"
          sx={{ my: 1, mx: 7, color: "black" }}
          noWrap
          component="div"
        >
          <Link to="/" preventScrollReset={true}>
            Jesus Christ
          </Link>
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => handleNavigation(page)}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              {page}
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={() => handleNavigation(setting)}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
