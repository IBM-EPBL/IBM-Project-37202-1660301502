import "../scss/sidebar.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../assets/icons/logo.svg";
import SideMenu from "../assets/icons/sidemenu.svg";
import { routes } from "../assets/routes.js";
import MenuTitle from "./MenuTitle";
import { useState } from "react";
const SideBar = () => {
  const [expanded, setExpanded] = useState(false)
  return (
    <nav className="" >
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expanded={expanded}
          expand={expand}
          className="mb-3 sidebar app-navbar navbar-dark"
        >
          <Container fluid >
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand} border-none`}
              onClick={() => {
                setExpanded(true)
                console.log("Click");
              }}
            >
              <img
                src={SideMenu}
                color="white"
                width={"25px"}
                className="m-1 p-0 my-2"
                alt={"sidemenu"}
              />
            </Navbar.Toggle>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              className="app-navbar"

            >
              <Offcanvas.Header closeButton onClick={() => setExpanded(false)}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Grocery
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="justify-content-end flex-grow-1 pe-3 app-navbar ">
                  <img src={Logo} className="p-3" width={"190px"} alt="logo" />

                  {routes.map((e, i) => {
                    return <MenuTitle e={e} key={i} onClick={() => {
                      setExpanded(false)
                    }} />;
                  })}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </nav>
  );
};
export default SideBar;
