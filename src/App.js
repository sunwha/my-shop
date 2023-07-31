import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import GnB from "./routes/Nav";
import Main from "./routes/Main";
import Detail from "./routes/Detail";
import About from "./routes/About";
import Event from "./routes/Event";
import Cart from "./routes/Cart";
import data from "./data";
import axios from "axios";
import "./App.css";

function App() {
  const [shoes, setShoes] = useState(data);
  const [more, setMore] = useState(0);
  const [loading, setLoading] = useState(false);

  function moreData() {
    setLoading(true);
    setTimeout(() => {
      axios
        .get(`https://codingapple1.github.io/shop/data${more + 2}.json`)
        .then((result) => {
          let copy = [...shoes, ...result.data];
          setShoes(copy);
          setMore(more + 1);
          setLoading(false);
        })
        .catch(() => {
          console.log("false");
        });
    }, 1000);
  }
  return (
    <div className="App">
      <GnB />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              shoes={shoes}
              moreData={moreData}
              more={more}
              loading={loading}
            />
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
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
