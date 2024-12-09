import { useStoreContext } from "../context"

const CartView = () => {
    const { cart, setCart } = useStoreContext();
    console.log(cart.entrySeq());
    return (
        <div>
            {cart.entrySeq().map(([key, value]) => { return (
                <>
                    <p key={key}>{value.title}</p>
                    <button onClick={() => setCart((prevCart) => prevCart.delete(key))}>Remove</button>
                </>
            ) })}
        </div>
    )
}

export default CartView;