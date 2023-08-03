import { Container, Row, Button } from "react-bootstrap";
import Shoes from "../components/Shoes";
import Recent from "../components/Recent";
import axios from "axios";
import { useState } from "react";
import { addMoreData } from "../store/productSlice";
import { useDispatch } from "react-redux";

const Main = ({ shoes }) => {
    const [more, setMore] = useState(0);
    const [loading, setLoading] = useState(0);
    const dispatch = useDispatch();
    function addMoreItem(more) {
        setLoading(true);
        setTimeout(() => {
            axios
                .get(`https://codingapple1.github.io/shop/data${more + 2}.json`)
                .then((result) => {
                    dispatch(addMoreData(result.data));
                    setLoading(false);
                    setMore(more + 1);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 1000);
    }

    return (
        <>
            <div
                className="main-bg"
                style={{
                    background: `url(${process.env.PUBLIC_URL}'/images/bg.png') center center no-repeat`,
                    backgroundSize: "cover",
                }}
            ></div>

            <Container>
                <Row md={3}>
                    {shoes.map((item, idx) => (
                        <Shoes
                            key={item.id}
                            itemId={item.id}
                            title={item.title}
                            price={item.price}
                            content={item.content}
                            idx={idx}
                        />
                    ))}
                </Row>
                <div
                    style={{
                        textAlign: "center",
                        marginTop: "30px",
                        marginBottom: "50px",
                    }}
                >
                    {more == 2 ? (
                        <span>No more products</span>
                    ) : loading ? (
                        <span>loading...</span>
                    ) : (
                        <Button
                            variant="light"
                            onClick={() => {
                                addMoreItem(more);
                            }}
                        >
                            More
                        </Button>
                    )}
                </div>
            </Container>
            <Recent />
        </>
    );
};

export default Main;
