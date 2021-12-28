// import { HomeMaxSharp } from "@mui/icons-material";
import { Avatar, Dropdown, Space, Typography, Menu } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const menu = (
    <Menu>
      <Menu.ItemGroup title="Group title">
        <Menu.Item>1st menu item</Menu.Item>
        <Menu.Item>2nd menu item</Menu.Item>
      </Menu.ItemGroup>
      <Menu.SubMenu title="sub menu">
        <Menu.Item>3rd menu item</Menu.Item>
        <Menu.Item>4th menu item</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title="disabled sub menu" disabled>
        <Menu.Item>5d menu item</Menu.Item>
        <Menu.Item>6th menu item</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        {" "}
        <h3 className="navbar-brand">Navlinkk</h3>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link">
                <Space>
                  <Typography>Home</Typography>
                </Space>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profile" className="nav-link">
                Profile{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              {" "}
              <NavLink to="/about" className="nav-link">
                About{" "}
              </NavLink>
            </li> 
            <li className="nav-item">
              {" "}
              <NavLink to="/slider" className="nav-link">
                Slide
              </NavLink>
            </li>

            <li className="nav-item mt-1">
              <Dropdown overlay={menu}>
                <Avatar />
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
