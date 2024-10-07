import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import Avatar from "../../shared/components/Avatar.js";
import { logout } from "../../shared/utils/auth.js";

export default function BasicMenu({ user }) {
  const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = async (target) => {
    setAnchorEl(null);
    if (target === "logout") {
      logout();
    }
  };

  const iconButtonStyle =
    location.pathname === "/profile"
      ? {
          color: "#fff",
          backgroundColor: "#32AA90",
          borderRadius: ".375rem",
          fontWeight: "bolder",
        }
      : {
          color: "#3E63B0",
        };

  return (
    <>
      <IconButton style={iconButtonStyle} onClick={handleMenuOpen}>
        <Avatar
          username={user ? user.userName : ""}
          proImage={user ? user.profileImage?.url : ""}
        />
        <p className="m-0 ms-2" style={{ fontSize: "18px" }}>
          {user ? user.userName : ""}
        </p>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleMenuClose}>
          <NavLink className="nav-link" to="/mainprofile">
            Profile
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <NavLink className="nav-link" to="/myReservations">
            Reservations
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <NavLink className="nav-link text-center" to="/favourite">
            <i className="fa-solid fa-heart text-center"></i> wishlist
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <NavLink className="nav-link text-center" to="/Cart">
            <i className="fa-solid fa-cart-shopping"></i> cart
          </NavLink>
        </MenuItem>
        <MenuItem onClick={() => handleMenuClose("logout")}>
          <NavLink className="nav-link" to="/auth/login">
            Logout
          </NavLink>
        </MenuItem>
      </Menu>
    </>
  );
}
