import { useStoreContext } from "../context"

const CartView = () => {
    const { cart } = useStoreContext();
    console.log(cart.entrySeq());
    return (
        <div>
            {cart.entrySeq().map(([key, value]) => { return (
                <p key={key}>{value.title}</p>
            ) })}
        </div>
    )
}

export default CartView;