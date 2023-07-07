import React from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import logo from '../../assets/logo192.png';

export const Header = () => (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"> <img width="50px" src={logo} alt="Logo" /> </Navbar.Brand>
        <Nav className="me-auto">
            <NavLink 
              className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} 
              to="/"
            >
                Home page
            </NavLink>
            <NavLink
              className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
              to="/todos"
            >
                Todo page
            </NavLink>
            <NavLink
              className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
              to="/users"
            >
              Users page
            </NavLink>
            <NavLink
              className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
              to="/posts"
            >
              Post page
            </NavLink>
            <NavLink
              className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
              to="/comments"
            >
              Comment page
            </NavLink>
        </Nav>
      </Container>
    </Navbar>
)
