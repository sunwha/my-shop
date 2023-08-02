import { useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function Shoes({ title, price, content, idx }) {
    let navigate = useNavigate();
    return (
        <Col onClick={() => navigate(`/detail/${idx}`)} style={{ textAlign: "center" }}>
            <img src={`${process.env.PUBLIC_URL}/images/shoes${idx + 1}.jpg`} alt={`shoes${idx + 1}`} width="80%" />
            <h4>{title}</h4>
            <p>{price} won</p>
            <p>{content}</p>
        </Col>
    );
}