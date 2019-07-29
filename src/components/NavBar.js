import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../navbar.scss";

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  // NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { useAuth0 } from "../react-auth0-spa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin
    });

    const pStyle = {
      backgroundColor: "#00CB79",
      textDecoration: "none",
      width: "150px",
      margin: "2px 0 2px 40px",
      border: "solid 1px transparent",
      borderRadius: "20px",
      fontSize: "20px",
      fontWeight: "bold"
    };

    const iStyle = {
      backgroundColor: "#333",
      body: "#333",
      boxShadow: "0 2px 6px 0 rgba(0,0,0,0.2)",
      textAlign: "Center",
      justifyContent: 'Center',
      alignItems: 'Center !important',
      color: 'white',
    };

    const cStyle = {
      textAlign: "Center",
      justifyContent: 'Center',
      alignItems: 'Center',
      textAlign: 'Center'
    }

    const aStyle = {
      color: 'white',
      borderStyle: 'none',
      width: '125px',
      textAlign: 'Center'
    }

    const sStyle = {
      display: "block",
      width: "700px",
      alignItems: 'Center',
      textAlign: 'Center !important',
      justifyContent: 'Center !important',
      margin: "0 auto",
      maxWidth: "700px"
    }


  return (
    <div style={iStyle} className="nav-container">
      <Navbar style={iStyle} light expand="md">
        <Container style={cStyle} className="nav-container__container">
          {/* <NavbarBrand className="logo" /> */}
          <NavbarToggler style={cStyle} onClick={toggle} />
          <Collapse style={cStyle} isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink
                  style={aStyle} 
                  tag={RouterNavLink}
                  to="/"
                  exact
                  activeClassName="router-link-exact-active"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={aStyle} 
                  tag={RouterNavLink}
                  to="/get-started"
                  exact
                  activeClassName="router-link-exact-active"
                >
                  Get Started
                </NavLink>
              </NavItem>
              <NavItem>
                <div style={sStyle} className="nav-container__title">
                  <h1>Water My Plants</h1>
              </div>
              </NavItem>
            </Nav>
            {/* <Nav>
            <div style={sStyle} className="nav-container__title">
                <h1>Water My Plants</h1>
            </div>
            </Nav> */}
            <Nav className="d-none d-md-block" navbar>
              {!isAuthenticated && (
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    style={pStyle}
                    className="btn-margin"
                    onClick={() => loginWithRedirect({})}
                  >
                    Log in
                  </Button>
                </NavItem>
              )}
              {isAuthenticated && (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret id="profileDropDown">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="50"
                    />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>{user.name}</DropdownItem>
                    <DropdownItem
                      tag={RouterNavLink}
                      to="/profile"
                      className="dropdown-profile"
                      activeClassName="router-link-exact-active"
                    >
                      <FontAwesomeIcon icon="user" className="mr-3" /> Profile
                    </DropdownItem>
                    <DropdownItem
                      tag={RouterNavLink}
                      to="/account"
                      className="dropdown-profile"
                      activeClassName="router-link-exact-active"
                    >
                      <FontAwesomeIcon icon="user" className="mr-3" /> Account
                    </DropdownItem>
                    <DropdownItem
                      id="qsLogoutBtn"
                      onClick={() => logoutWithRedirect()}
                    >
                      <FontAwesomeIcon icon="power-off" className="mr-3" /> Log
                      out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
            {!isAuthenticated && (
              <Nav className="d-md-none" navbar>
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    style={pStyle}
                    block
                    onClick={() => loginWithRedirect({})}
                  >
                    Log in
                  </Button>
                </NavItem>
              </Nav>
            )}
            {isAuthenticated && (
              <Nav
                className="d-md-none justify-content-between"
                navbar
                style={{ minHeight: 170 }}
              >
                <NavItem>
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="50"
                    />
                    <h6 className="d-inline-block">{user.name}</h6>
                  </span>
                </NavItem>
                <NavItem>
                  <FontAwesomeIcon icon="user" className="mr-3" />
                  <RouterNavLink
                    to="/profile"
                    activeClassName="router-link-exact-active"
                  >
                    Profile
                  </RouterNavLink>
                </NavItem>
                <NavItem>
                  <FontAwesomeIcon icon="power-off" className="mr-3" />
                  <RouterNavLink
                    to="#"
                    id="qsLogoutBtn"
                    onClick={() => logoutWithRedirect()}
                  >
                    Log out
                  </RouterNavLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
