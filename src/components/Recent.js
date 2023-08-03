import Shoes from "../components/Shoes";

export default function Recent() {
    const local = localStorage.getItem("watched");
    let localData = JSON.parse(local);

    return (
        <>
            {localData.length ? (
                <div style={{ position: "fixed", top: "70px", right: "47px", width: "20vw", padding: "10px", borderRadius: "10px", border: "1px solid #ccc", backgroundColor: "#fff" }}>
                    <h4>Recent Items</h4>
                    <ul style={{ padding: 0, listStyle: "none" }}>
                        {localData.map((item) => (
                            <li key={item.id}>
                                <Shoes itemId={item.id} title={item.title} price={item.price} content={item.content} idx={item.id} />
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </>
    );
}
