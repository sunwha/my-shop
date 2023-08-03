import { useContext, useEffect, useState } from "react";
import { Container, Card, Button, Toast } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Tab from "../components/Tab";
import Recent from "../components/Recent"
import "../App.css";
import { addCart } from "../store/userSlice";
import { useDispatch } from "react-redux";

const Detail = ({ shoes }) => {
    const { id } = useParams();
    const item = shoes.find((x) => x.id == id);
    const [toast, setToast] = useState(true);
    const [num, setNum] = useState(false);
    const [count, setCount] = useState(0);
    const [fade, setFade] = useState("");
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        setFade("end");
        let timer = setTimeout(() => {
            setToast(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
            setFade("");
        };
    }, []);

    function quantityVal(e) {
        if (e.target.value) {
            setNum(true);
            setCount(e.target.value);
        } else {
            setNum(false);
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

            <Container className={`start ${fade}`}>
                <div style={{ display: "flex", marginTop: "50px" }}>
                    <div style={{ width: "70vw" }}>
                        <img src={`${process.env.PUBLIC_URL}/images/shoes${parseInt(Number(id) + 1)}.jpg`} alt={`shoes${parseInt(Number(id) + 1)}`} style={{ width: "100%" }} />
                    </div>
                    <Card style={{ width: "30vw", height: "70vh", textAlign: "center" }}>
                        <Card.Body>
                            <Card.Title style={{ marginBottom: "30px" }}>{item.title}</Card.Title>
                            <Card.Subtitle className="mb-3 text-muted">{item.price} won</Card.Subtitle>
                            <Card.Text>{item.content}</Card.Text>
                            <input type="number" placeholder="Number" style={{ width: "100%" }} onChange={(e) => quantityVal(e)} min="1" max="5" maxLength="1" />
                            {[null, null, <p style={{ fontSize: "12px", color: "red", textAlign: "left" }}>Please enter number only.</p>][num]}
                            <Button variant="danger" size="sm" style={{ marginTop: "10px" }} onClick={() => {dispatch(addCart([item, count])); navigate("/cart")}} disabled={num ? false : true}>
                                Order
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <Tab item={item} />
            </Container>
            <Recent />
        </>
    );
};

export default Detail;
