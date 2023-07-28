import { Container, Nav } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

const Event = () => {
    let navigate = useNavigate();
    return (
        <Container>
            <h2 style={{ textAlign: "center", marginTop: "50px", marginBottom: "20px" }}>오늘의 이벤트</h2>
            <Nav fill variant="tabs" defaultActiveKey="one">
                <Nav.Item>
                    <Nav.Link eventKey="one" onClick={() => navigate("one")}>one</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="two" onClick={() => navigate("two")}>two</Nav.Link>
                </Nav.Item>
            </Nav>
            <Outlet></Outlet>
        </Container>
    );
};

export default Event;
