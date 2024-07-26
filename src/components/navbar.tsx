import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, MenuItem, MenuMenu } from "semantic-ui-react";

const Navbar = () => {
  const navigate = useNavigate();

  const navigateTo = (pathName: string) => {
    navigate(pathName);
  };

  return (
    <Menu fixed="top" size="huge">
      <Menu.Item onClick={() => navigateTo("/")}>Home</Menu.Item>
      <MenuItem onClick={() => navigateTo("/rated")}>Rated</MenuItem>
      <MenuMenu position="right">
        <MenuItem onClick={() => navigateTo("/auth")}>Auth</MenuItem>
      </MenuMenu>
    </Menu>
  );
};

export default Navbar;
