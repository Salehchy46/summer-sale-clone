// Global total price variable
let totalPrice = 0;

// Function to get the product price from the DOM
function takePaymentAmount(productCostId) {
  const productPriceElement = document.getElementById(productCostId);
  const productPriceString = productPriceElement.innerText;
  const price = parseFloat(productPriceString);
  return price;
}

// Function to set the total price in the DOM
function setTotalPrice(elementId, total) {
  const element = document.getElementById(elementId);
  element.innerText = total;
}

// Functio to get counpon code
function getCouponCode(){
  const counponString = document.getElementById('coupon-code');
  const coupon = counponString.value;
  return coupon;
}

// Function to add a product to the cart display
function myCart(productName, cost) {
  const cart = document.getElementById('added-to-cart');
  const count = cart.childElementCount + 1;  // Update count based on current items

  const p = document.createElement('p');
  p.innerHTML = `${count}. ${productName} - ${cost} TK`;
  
  cart.appendChild(p);
}

// Product function that adds to the total and updates cart
function firstProduct() {
  const productPrice = takePaymentAmount('product-one-price');
  totalPrice += productPrice; // Update total price each time

  myCart('K. Accessories', productPrice); // Add product to cart display
  setTotalPrice('total-amount', totalPrice); // Update the total in the DOM
}

function secondProduct() {
  const productPrice = takePaymentAmount('product-two-price');
  totalPrice += productPrice;

  myCart('K. Accessories', productPrice);
  setTotalPrice('total-amount', totalPrice);
}

function ThirdProduct() {
  const productPrice = takePaymentAmount('product-three-price');
  totalPrice += productPrice;

  myCart('Home Cooker', productPrice);
  setTotalPrice('total-amount', totalPrice);
}

function fourthProduct(){
  const productPrice = takePaymentAmount('product-four-price');
  totalPrice += productPrice;

  myCart('Sports Back Cap', productPrice);
  setTotalPrice('total-amount', totalPrice)
}

function fifthProduct(){
  const productPrice = takePaymentAmount('product-five-price');
  totalPrice += productPrice;

  myCart('Full Jersey Set', productPrice);
  setTotalPrice('total-amount', totalPrice)
}

function sixthProduct(){
  const productPrice = takePaymentAmount('product-six-price');
  totalPrice += productPrice;

  myCart('Sports cates', productPrice);
  setTotalPrice('total-amount', totalPrice)
}

function seventhProduct(){
  const productPrice = takePaymentAmount('product-seven-price');
  totalPrice += productPrice;

  myCart('Single Relax Chair', productPrice);
  setTotalPrice('total-amount', totalPrice)
}

function eighthProduct(){
  const productPrice = takePaymentAmount('product-eight-price');
  totalPrice += productPrice;

  myCart('Children play', productPrice);
  setTotalPrice('total-amount', totalPrice)
}

function ninthProduct(){
  const productPrice = takePaymentAmount('product-nine-price');
  totalPrice += productPrice;

  myCart('Flexible Sofa', productPrice);
  setTotalPrice('total-amount', totalPrice)
}

function discounted() {
  const couponText = getCouponCode(); // Assume this fetches the coupon input from the user

  if (totalPrice > 200 && couponText === 'SELL200') {
    const discountedTotal = 0.2 * totalPrice;
    const discount = discountedTotal.toFixed(2);
    const totalAfterDiscount = totalPrice - discount;

    // Update the global total price with the discounted amount
    totalPrice = totalAfterDiscount;

    // Display the discount amount and the total price after discount
    setTotalPrice('discounted', discount);             
    setTotalPrice('after-discount-total', totalPrice); 
  } else {
    alert('No discount available');
  }
}
