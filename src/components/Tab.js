import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import "../App.css";

export default function Tab({ item }) {
    const [tab, tabChange] = useState(0);
    return (
        <>
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={() => tabChange(0)}>
                        Option 1
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={() => tabChange(1)}>
                        Option 2
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={() => tabChange(2)}>
                        Option 3
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab} item={item} />
        </>
    );
}

function TabContent({ tab, item }) {
    let [fade, setFade] = useState("");

    useEffect(() => {
        let timer = setTimeout(() => {
            setFade("end");
        }, 100);
        return () => {
            clearTimeout(timer);
            setFade("");
        };
    }, [tab]);

    return <div className={`start ${fade}`}>{[<div>{item.title}</div>, <div>내용 1</div>, <div>내용 2</div>][tab]}</div>;
}
