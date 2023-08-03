import { Container, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeMinus, changePlus, deleteItem } from "../store/userSlice";

function Cart({ resultName }) {
    const cartList = useSelector((state) => state.userSlice);
    const dispatch = useDispatch();
    return (
        <Container style={{ marginTop: "50px" }}>
            <h2 style={{ marginBottom: "10px", textAlign: "center" }}>{`${resultName.data.name}'s Cart`}</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {cartList &&
                        cartList.map((item, idx) => (
                            <tr key={item.id}>
                                <td>{idx + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.count}</td>
                                <td>
                                    <Button variant="outline-dark" onClick={() => dispatch(changePlus(item.id))}>
                                        +
                                    </Button>
                                    <Button variant="outline-dark" onClick={() => dispatch(changeMinus(item.id))}>
                                        -
                                    </Button>
                                    <Button variant="outline-dark" onClick={() => dispatch(deleteItem(item.id))}>
                                        x
                                    </Button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default Cart;
