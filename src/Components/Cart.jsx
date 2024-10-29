import { RxCross2 } from "react-icons/rx";
import { useCartContext } from "../Context/CartContext";

const Cart = ({ onClose }) => {
  const { cartItems, addToCart, removeFromCart, decreaseItemQuantity } = useCartContext();


  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="overflow-y-scroll fixed right-0 top-0 bg-white xl:w-[500px] w-full sm:w-[400px] h-screen z-50 px-6 py-4 flex flex-col justify-between shadow-lg">
      <div>
        <div className="flex justify-between py-4 border-b-[1px] border-b-gray-200">
          <h1 className="text-lg sm:text-xl font-semibold">Shopping Cart</h1>
          <RxCross2 className="text-2xl sm:text-3xl cursor-pointer" onClick={onClose} />
        </div>

        {/* Cart Items */}
        <div className="mt-6 space-y-6">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center bg-gray-50 rounded-lg p-4 shadow-sm">
                <div className="flex space-x-5">
                  <img
                    className="w-[64px] sm:w-[74px] h-[64px] sm:h-[74px] rounded-lg object-cover"
                    src={item.product_image}
                    alt={item.name}
                  />
                  <div className="info space-y-2">
                    <p className="name font-semibold text-sm sm:text-base">{item.name}</p>
                    <div className="number flex items-center border-[1px] border-gray-300 rounded-md">
                      <button
                        className="px-3 py-1 font-bold text-gray-600 hover:text-primary"
                        onClick={() => decreaseItemQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className="px-4 py-1 font-medium text-gray-700">{item.quantity}</span>
                      <button
                        className="px-3 py-1 font-bold text-gray-600 hover:text-primary"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="price flex flex-col items-end">
                  <RxCross2
                    className="bg-gray-300 rounded-full p-1 w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:bg-gray-400"
                    onClick={() => removeFromCart(item.id)}
                  />
                  <p className="text-base font-semibold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
          )}
        </div>
      </div>

      <div className="space-y-5 mb-5">
        {/* Subtotal */}
        <div className="subtotal flex justify-between border-t-[1px] border-t-gray-300 py-4">
          <h1 className="text-lg font-semibold">Subtotal</h1>
          <h1 className="text-lg font-semibold text-gray-800">${subtotal}</h1>
        </div>

        <button className="w-full py-3 text-center bg-primary text-white rounded-lg text-base font-medium hover:bg-primary-dark">
          View Cart
        </button>

        <button
          className="w-full py-3 text-center bg-primary text-white rounded-lg text-base font-medium hover:bg-primary-dark"
          onClick={onClose}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
