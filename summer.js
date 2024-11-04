//Product price collection
function takePaymentAmount (productCost){
  const productPrice = document.getElementById(productCost);
  const productPriceString = productPrice.value;
  const price = parseFloat(productPriceString);
  return price;
}

//Set total price 
function setTotalPrice (elementId, total){
  const element = document.getElementById(elementId);
  element.innerText = total;
}

//Cart to add
function myCart(productName, cost){
  const product = document.getElementById('added-to-cart');
  const count = product.childElementCount;

  const p = document.createElement('p');
  p.innerHTML = `${count + 1}. ${productName} ${cost}`;

  product.appendChild(p);
}

//Product 1
function firstProduct(){
  
}

