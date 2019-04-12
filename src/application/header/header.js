import React from 'react';
import {NavItem, Nav } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Nav bsStyle="pills" activeKey={1}>
          <NavItem eventKey={1} href= "/">
            Book Shelve
          </NavItem>
          <NavItem eventKey={2} href= "/">
            Search
          </NavItem>
        </Nav>
       </div>
    );
  }
}

export default Header;