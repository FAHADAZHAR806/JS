const numbers = [23, 45, 67, 89, 120];
const mapFilterReducer = numbers
  .map((num) => {
    return num * 2;
  }) // expecteed result=46,90,134,178,240
  .filter((num) => {
    return num > 120;
  }) // expecteed result=134,178,240

  .reduce((acc, crr) => {
    return acc + crr;
  }, 0);
console.log(mapFilterReducer);

// // expecteed result=134,178,240=552
const shoppingCart = [
  { product: "jewelry", price: 500 },
  { product: "Clothes", price: 1200 },
  { product: "Shoes", price: 1400 },
];
totalprice = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);
console.log(`Total price is $${totalprice}`);
