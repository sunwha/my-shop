import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Main = ({shoes}) => {
    return (
        <>
            <div className="main-bg" style={{ background: `url(${process.env.PUBLIC_URL}'/images/bg.png') center center no-repeat`, backgroundSize: "cover" }}></div>

            <Container>
                <Row>
                    {shoes.map((item, idx) => (
                        <Shoes  key={item.id} id={item.id} title={item.title} price={item.price} content={item.content} idx={idx} />
                    ))}
                </Row>
            </Container>
        </>
    );
};

function Shoes({ title, price, content, idx }) {
    let navigate = useNavigate();
    return (
        <Col onClick={() => navigate(`/detail/${idx}`)}>
            <img src={`${process.env.PUBLIC_URL}/images/shoes${idx+1}.jpg`} alt={`shoes${idx+1}`} width="80%" />
            <h4>{title}</h4>
            <p>{price} won</p>
            <p>{content}</p>
        </Col>
    );
}

export default Main;
