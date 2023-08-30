import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

const pages = ["Salvation", "Repentance Of Sins", "Revelation"];
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
  const [open, setOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigation = (settings) => {
    navigate(settings.toLowerCase());
    setAnchorElUser(null);
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
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
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
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="relative container mx-auto p-6">
//       <div className="flex items-center justify-between">
//         {/* Flex Container For Logo/Menu */}

//         <div className="flex items-center space-x-20">
//           <Link
//             to="/"
//             preventScrollReset={true}
//             className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left"
//           >
//             Jesus Christ
//           </Link>
//           <div className="hidden space-x-8 font-bold lg:flex">
//             <Link
//               preventScrollReset={true}
//               to="/salvation"
//               className="text-grayishViolet hover:text-veryDarkViolet"
//             >
//               Salvation
//             </Link>
//             <Link
//               preventScrollReset={true}
//               to="/repentance-of-sins"
//               className="text-grayishViolet hover:text-veryDarkViolet"
//             >
//               Repentance of sins
//             </Link>
//             <Link
//               preventScrollReset={true}
//               to="/revelation"
//               className="text-grayishViolet hover:text-veryDarkViolet"
//             >
//               Revelations
//             </Link>
//           </div>
//         </div>

//         {/* Right Buttons Menu */}
//         <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
//           <Link
//             to="/login"
//             preventScrollReset={true}
//             className="hover:text-veryDarkViolet"
//           >
//             Login
//           </Link>
//           <Link
//             preventScrollReset={true}
//             to="/sign-up"
//             className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
//           >
//             Sign Up
//           </Link>
//         </div>

//         {/* Hamburger Button */}
//         <button
//           id="menu-btn"
//           className="block hamburger lg:hidden focus:outline-none"
//           type="button"
//         >
//           <span className="hamburger-top"></span>
//           <span className="hamburger-middle"></span>
//           <span className="hamburger-bottom"></span>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         id="menu"
//         className="absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100"
//       >
//         <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
//           <Link
//             to="/salvation"
//             preventScrollReset={true}
//             className="w-full text-center"
//           >
//             Salvation
//           </Link>
//           <Link
//             to="repentance-of-sins"
//             preventScrollReset={true}
//             className="w-full text-center"
//           >
//             Repentance of sins
//           </Link>
//           <Link
//             to="/revelations"
//             preventScrollReset={true}
//             className="w-full text-center"
//           >
//             Revelations
//           </Link>
//           <Link
//             preventScrollReset={true}
//             to="/login"
//             className="w-full pt-6 border-t border-gray-400 text-center"
//           >
//             Login
//           </Link>
//           <Link
//             preventScrollReset={true}
//             to="/sign-up"
//             className="w-full py-3 text-center rounded-full bg-cyan"
//           >
//             Sign Up
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
