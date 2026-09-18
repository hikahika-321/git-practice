function calculateTotal(price, quantity, discountRate) {
  const subtotal = price * quantity;
  const discount = subtotal * discountRate;
  const total = subtotal - discount;

  return total;
}

function createOrder() {
  const price = 1200;
  const quantity = 3;
  const discountRate = 10;

  return calculateTotal(price, quantity, discountRate);
}

const result = createOrder();
console.log(result);