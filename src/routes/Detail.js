import { useEffect, useState } from "react";
import { Container, Card, Button, Toast } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Detail = ({ shoes }) => {
    const { id } = useParams();
    const item = shoes.find((x) => x.id == id);
    const [toast, setToast] = useState(true);
    const [num, setNum] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => {
            setToast(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, [num]);

    function numCheckFn(e){
        if(e.target.value){
            if(isNaN(e.target.value)) {
                setNum(false);
            } else {
                setNum(true);
            }
        } else {
            setNum(true)
        }
    }

    return (
        <>
            {toast ? (
                <Toast className="toast">
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">Event</strong>
                    </Toast.Header>
                    <Toast.Body>Hello! Please check your event!</Toast.Body>
                </Toast>
            ) : null}

            <Container style={{ display: "flex", height: "100vh" }}>
                <div style={{ width: "70vw" }}>
                    <img src={`${process.env.PUBLIC_URL}/images/shoes${parseInt(Number(id) + 1)}.jpg`} alt={`shoes${parseInt(Number(id) + 1)}`} style={{ width: "100%" }} />
                </div>
                <Card style={{ width: "30vw", height: "70vh", textAlign: "center" }}>
                    <Card.Body>
                        <Card.Title style={{ marginBottom: "30px" }}>{item.title}</Card.Title>
                        <Card.Subtitle className="mb-3 text-muted">{item.price} won</Card.Subtitle>
                        <Card.Text>{item.content}</Card.Text>
                        <input type="text" placeholder="Number" style={{ width: "100%" }} onChange={numCheckFn} />
                        {num ? null : <p style={{ fontSize: "12px", color: "red", textAlign: "left" }}>Please enter number only.</p>}
                        <Button variant="danger" size="sm" style={{ marginTop: "10px" }}>
                            Order
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default Detail;
