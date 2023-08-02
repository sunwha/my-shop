import { useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Shoes({ itemId, title, price, content, idx }) {
    let navigate = useNavigate();
    const data = useSelector((state) => state.productSlice);
    const [recent, setRecent] = useState([]);

    function addRecent(itemId) {
        const clickedItem = data.find((elem) => elem.id === itemId);
        setRecent([...recent, clickedItem]);
        console.log(recent);
        // localStorage.setItem("clickedItem", JSON.stringify(clickedItem));
    }

    return (
        <Col
            onClick={() => {
                navigate(`/detail/${idx}`);
                addRecent(itemId);
            }}
            style={{ textAlign: "center" }}
        >
            <img src={`${process.env.PUBLIC_URL}/images/shoes${idx + 1}.jpg`} alt={`shoes${idx + 1}`} width="80%" />
            <h4>{title}</h4>
            <p>{price} won</p>
            <p>{content}</p>
        </Col>
    );
}
