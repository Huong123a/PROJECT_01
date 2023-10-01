// function displayQuantityCart() {
//   const quantityCart = document.querySelector("#number-cart");
//   const user = JSON.parse(localStorage.getItem("userLogin")) || {};
//   const listCart = JSON.parse(localStorage.getItem("listCart")) || [];
//   if ((user.length = 0)) {
//     quantityCart.textContent = 0;
//   }
//   let qtys = 0;
//   const cartForUser = listCart.find((cart) => cart.email == user.email);
//   console.log(cartForUser);
//   const carts = cartForUser.carts;
//   carts.forEach(function (item) {
//     qtys += item.quantity;
//   });

//   quantityCart.textContent = qtys;
// }
// displayQuantityCart();
