const setCart = (carts) => {
  localStorage.setItem("carts", JSON.stringify(carts));
};

const getCarts = () => {
  const carts = localStorage.getItem("carts");
  return carts ? JSON.parse(carts) : [];
};

const addToLocalStorageCart = (item) => {
  const carts = getCarts();
  const existingItemIndex = carts.findIndex(cartItem => cartItem.id === item.id);

  if (existingItemIndex !== -1) {

    carts[existingItemIndex].quantity += 1;
  } else {

    carts.push({ ...item, quantity: 1 });
  }
  setCart(carts);
};

1
const decreaseLocalStorageItemQuantity = (itemId) => {
  const carts = getCarts();
  const updatedCart = carts.map(item =>
    item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
  ).filter(item => item.quantity > 0);

  setCart(updatedCart);
};


const removeFromLocalStorageCart = (itemId) => {
  const carts = getCarts().filter(item => item.id !== itemId);
  setCart(carts);
};

export { setCart, getCarts, addToLocalStorageCart, decreaseLocalStorageItemQuantity, removeFromLocalStorageCart };
