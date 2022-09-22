// import React from "react";
// import { Container ,col ,Row } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";


// const App =() => {
//   return (
//     <container>
//       <row>
//         <col md='8'>1</col>
//         {/* <BuyPage></BuyPage> */}
//         <col md='4'>2</col>
//       </row>
//     </container>
//   )
// }

// export default App;

// import React from "react";
// import { Container, Row, Col } from "reactstrap";

// function App() {
//   return (

//       <Container>
//         <Row>
//           <Col>Java</Col>
//           <Col>BuyPage</Col>
//           <Col>Html</Col>
//           <Col>CSS</Col>
//         </Row>

//       </Container>
//   );
// }

// export default App;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                multiple
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;