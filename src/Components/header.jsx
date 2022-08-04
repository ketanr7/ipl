import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/ipl-logo-new-old.png';

import './header.scss';

const Header = () => (
<>
 

<Navbar bg="dark" sticky="top" className="nav">
  <Container>
    <Navbar.Brand href="/">
      <img
        src={logo}
        width="100"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Container>
</Navbar>

</>
);

export default Header;


