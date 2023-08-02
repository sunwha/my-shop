import { useSelector } from "react-redux";
import Shoes from "./Shoes";

export default function Recent({ items }) {
    return (
        <div style={{position:"fixed", top:"70px", right:"50px", padding:"10px", borderRadius:"10px", backgroundColor:"#fff"}}>
             <h4>Recent Items</h4>
        </div>
    );
}
