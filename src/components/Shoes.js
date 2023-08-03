import { useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Shoes({ itemId, title, price, content, idx }) {
    let navigate = useNavigate();
    const data = useSelector((state) => state.productSlice);
    
    function addRecent(itemId) {
        const clickedItem = data.find((elem) => elem.id === itemId);
        const local = localStorage.getItem("watched");
        let localData = JSON.parse(local);
        if(!localData.find((elem)=> elem.id === clickedItem.id)) {
            localData.unshift(clickedItem)
        }
        if(localData.length > 2){
            localData.splice(-1, 2);
        }
        localStorage.setItem("watched", JSON.stringify(localData));
    }

    return (
        <Col
            onClick={() => {
                addRecent(itemId);
                navigate(`/detail/${idx}`);   
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
