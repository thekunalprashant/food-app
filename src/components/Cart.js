import ItemCard from "./ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch(clearCart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className=" p-4">
      <h1 className="text-center text-2xl font-bold m-4">Cart</h1>
      <div className="w-6/12 m-auto text-left border shadow-lg">
        {items.length === 0 ? (
          <div>
            <h1 className="p-4 m-4">Cart is empty. Please add items!</h1>
          </div>
        ) : (
          <div>
            <button
              className="m-2 p-2 bg-green-400 rounded-lg font-medium "
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <ItemCard items={items} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
