import Header from "../components/Header";
import Footer from "../components/Footer";
import { useStoreContext } from "../context"
import { useNavigate } from "react-router-dom";

const CartView = () => {
    const { cart, setCart } = useStoreContext();
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            {cart.entrySeq().map(([key, value]) => { return (
                <div key={key}>
                    <p key={key}>{value.title}</p>
                    <img src={value.url} alt="" />
                    <button onClick={() => setCart((prevCart) => prevCart.delete(key))}>Remove</button>
                </div>
            ) })}
            <button onClick={() => navigate("/movies")}>Back</button>
            <Footer />
        </div>
    )
}

export default CartView;