import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Main = ({ shoes, moreData, more, loading }) => {
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
              id={item.id}
              title={item.title}
              price={item.price}
              content={item.content}
              idx={idx}
            />
          ))}
        </Row>
        <p
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
            <Button variant="light" onClick={moreData}>
              More
            </Button>
          )}
        </p>
      </Container>
    </>
  );
};

function Shoes({ title, price, content, idx }) {
  let navigate = useNavigate();
  return (
    <Col
      onClick={() => navigate(`/detail/${idx}`)}
      style={{ textAlign: "center" }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/images/shoes${idx + 1}.jpg`}
        alt={`shoes${idx + 1}`}
        width="80%"
      />
      <h4>{title}</h4>
      <p>{price} won</p>
      <p>{content}</p>
    </Col>
  );
}

export default Main;
