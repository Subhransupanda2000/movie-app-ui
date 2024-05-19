import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

function NavigateBar() {
  return  (
    <div style={{ width: '200px', backgroundColor: '#f0f0f0', height: '100vh', paddingTop: '20px' }}>
      <Nav vertical>
      <NavItem>
            <NavLink to="/getmovie">createmovie</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/getmovie">updatemovie</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/getmovie">deletemovie</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/getmovie">getmovie</NavLink>
          </NavItem>
      </Nav>
    </div>
  );
}

export default NavigateBar;