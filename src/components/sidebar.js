import React from "react";
import { useStore } from "./../hooks";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Navbar, NavbarBrand } from "react-bootstrap";

const Default = () => {
  const { isSidebarOpen, toggleSidebar } = useStore();
  return (
    <ProSidebar
      toggled={isSidebarOpen}
      onToggle={toggleSidebar}
      breakPoint={"lg"}
    >
      <SidebarHeader>
        <Navbar>
          <NavbarBrand className="w-100 m-0 text-center text-light">
            React-bootstrap template
          </NavbarBrand>
        </Navbar>
      </SidebarHeader>
      <Menu className="bg-dark p-0" iconShape="square">
        <MenuItem icon={"123"}>Dashboard</MenuItem>
        <SubMenu title="Components" icon={"fa"}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default Default;