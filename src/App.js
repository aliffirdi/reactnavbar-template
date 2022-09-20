import React from "react";
import "./styles.css";
import SideNavBar from "/Components/Sidebar";
import HeaderBar from "/Components/HeaderBar";
import { NavbarBrand } from "react-bootstrap";

const styles = {
  nopadding: {
    paddingLeft: 0,
    paddingRight: 0
  }
};

export default function App() {
  return (
    <div style={styles.nopadding}>
      <HeaderBar />

      <SideNavBar />
    </div>
  );
}
