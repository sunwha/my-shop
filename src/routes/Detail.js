import { Container, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const YellowBtn = styled.button`
    background: ${(props) => props.bg};
    color: ${(props) => (props.bg === "blue" ? "white" : "black")};
    padding: 10px;
`;
const NewBtn = styled(YellowBtn)`
    border-color:red
`;
const Detail = ({ shoes }) => {
    const { id } = useParams();
    const item = shoes.find((x) => x.id == id);

    return (
        <>
            <Container style={{ display: "flex", height: "100vh" }}>
                <div style={{ width: "70vw" }}>
                    <img src={`${process.env.PUBLIC_URL}/images/shoes${parseInt(Number(id) + 1)}.jpg`} alt={`shoes${parseInt(Number(id) + 1)}`} style={{ width: "100%" }} />
                </div>
                <Card style={{ width: "30vw", height: "70vh", textAlign: "center" }}>
                    <Card.Body>
                        <Card.Title style={{ marginBottom: "30px" }}>{item.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{item.price} won</Card.Subtitle>
                        <Card.Text>{item.content}</Card.Text>
                        <Button variant="danger" size="sm">
                            Order
                        </Button>
                        <YellowBtn bg="yellow">버튼</YellowBtn>
                        <YellowBtn bg="blue">버튼</YellowBtn>
                        <NewBtn bg="white">버튼</NewBtn>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default Detail;
