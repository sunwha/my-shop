import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import GnB from "./routes/Nav";
import Main from "./routes/Main";
import Detail from "./routes/Detail";
import About from "./routes/About";
import Event from "./routes/Event";
import Cart from "./routes/Cart";

import "./App.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
    const data = useSelector((state) => state.productSlice);
    useEffect(() => {
        localStorage.setItem("watched", JSON.stringify([]));
    }, []);

    return (
        <div className="App">
            <GnB />
            <Routes>
                <Route path="/" element={<Main shoes={data} />} />
                <Route path="/detail/:id" element={<Detail shoes={data} />} />
                <Route path="/about" element={<About />}>
                    <Route path="member" element={<div>Member</div>} />
                    <Route path="location" element={<div>Location</div>} />
                </Route>
                <Route path="/cart" element={<Cart />} />
                <Route path="/event" element={<Event />}>
                    <Route index element={<div>첫 주문시 양배추즙 서비스</div>} />
                    <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
                    <Route path="two" element={<div>생일기념 쿠폰 받기</div>} />
                </Route>
                <Route path="*" element={<Container>404</Container>} />
            </Routes>
        </div>
    );
}

export default App;
