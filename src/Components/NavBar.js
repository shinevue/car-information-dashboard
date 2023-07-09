import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <React.Fragment>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>Business Dash</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink href='/components/'>Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/reactstrap/reactstrap'>
                GitHub
              </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option1</DropdownItem>
                  <DropdownItem>Option2</DropdownItem>
                  <DropdownItem>Option3</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default AppBar;
