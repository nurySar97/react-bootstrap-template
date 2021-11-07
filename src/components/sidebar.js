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
import { toggleTheme } from "../services/themeService";

const themes = [
  "default",
  "cerulean",
  "cosmo",
  "cyborg",
  "darkly",
  "flatly",
  "journal",
  "litera",
  "lumen",
  "lux",
  "materia",
  "minty",
  "morph",
  "pulse",
  "quartz",
  "sandstone",
  "simplex",
  "sketchy",
  "slate",
  "solar",
  "spacelab",
  "superhero",
  "united",
  "vapor",
  "yeti",
  "zephyr",
];

const Default = () => {
  const { isSidebarOpen, toggleSidebar } = useStore();
  return (
    <ProSidebar
      toggled={isSidebarOpen}
      onToggle={toggleSidebar}
      breakPoint={"lg"}
    >
      <SidebarHeader className="bg-primary border-0">
        <Navbar>
          <NavbarBrand className="w-100 text-center text-light m-0">
            React-bootstrap template
          </NavbarBrand>
        </Navbar>
      </SidebarHeader>

      <Menu className="bg-dark p-0" iconShape="circle">
        <SubMenu title="Components" icon={"fa"}>
          {themes.map((theme) => (
            <MenuItem key={theme} onClick={() => toggleTheme(theme)}>
              {theme}
            </MenuItem>
          ))}
        </SubMenu>

        <SubMenu title="Components" icon={"fa"}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default Default;
