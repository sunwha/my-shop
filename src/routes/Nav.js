import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const GnB = () => {
    let navigate = useNavigate();

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand onClick={() => navigate("/")}>MYmSHOP</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>
                    <Nav.Link onClick={() => navigate("/cart")}>Cart</Nav.Link>
                    <Nav.Link onClick={() => navigate("/event")}>Event</Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                    <Nav.Item>
                        <Nav.Link onClick={() => navigate(-1)}>Back</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default GnB;
