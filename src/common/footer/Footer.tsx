import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => (
    <Navbar expand="lg" bg="dark" variant="dark" className="mt-5">
        <Container>
            <Navbar.Text className="text-light">
            &copy; 2023 hardcore website
            </Navbar.Text>
            <Nav className="ms-auto">
            <Nav.Link href="/"> Home</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/mykola-tsip-b3a0521ba/" target="_blank">
                <FaLinkedin />
            </Nav.Link>
            <Nav.Link href="https://github.com/MykolaTsip" target="_blank">
                <FaGithub />
            </Nav.Link>
            </Nav>
        </Container>
    </Navbar>
);