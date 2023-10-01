const productsDB = JSON.parse(localStorage.getItem("products")) || [];
const productDB = JSON.parse(localStorage.getItem("product")) || {};
const listUser = JSON.parse(localStorage.getItem("users")) || [];
const user = JSON.parse(localStorage.getItem("userLogin")) || {};
const listCart = JSON.parse(localStorage.getItem("listCart")) || []; // list san pham da mua

//lay thong tin tu nguowi dung
//neu chua dang nhap thi yeu cau dang nhap
console.log(user.email);
if (!user) {
  alert("Vui long dang nhap de mua hang");
  window.location.href = "/auth/login.html/index.html";
}
//truy van den noi render
const productDetailElement = document.querySelector(".product_detail-content");

let html = `<h4>${productDB.name}</h4>
<h5>${productDB.price}</h5>

<p>Chọn số lượng:</p>
<div class="btn-quantity">
  <button class="btn-quantity-reduce">-</button>
  <input class="quantity-input" type="text" value="1">
  <button class="btn-quantity-add">+</button>
</div>

<div>
  <button class="product_detail-btn-buynow" onclick="handleAddToCartProduct('${productDB.ID}')">Thêm vào giỏ hàng</button>

</div>

<h6>Mô tả sản phẩm</h6>
<hr />
${productDB.description}
`;
productDetailElement.innerHTML = html;

//tăng giảm btn mua hàng
// Lấy các phần tử DOM cần sử dụng
const quantityInput = document.querySelector(".quantity-input");
const btnQuantityReduce = document.querySelector(".btn-quantity-reduce");
const btnQuantityAdd = document.querySelector(".btn-quantity-add");
// Xử lý khi người dùng nhấn nút "-" để giảm số lượng
btnQuantityReduce.addEventListener("click", () => {
  let currentValue = parseInt(quantityInput.value);

  if (currentValue > 1) {
    currentValue--;
    quantityInput.value = currentValue;
  }
});
// Xử lý khi người dùng nhấn nút "+" để tăng số lượng
btnQuantityAdd.addEventListener("click", () => {
  let currentValue = parseInt(quantityInput.value);
  currentValue++;
  quantityInput.value = currentValue;
});

function handleAddToCartProduct(id) {
  console.log(id);
  //có id -> tìm produc trong products database
  const product = productsDB.find((item) => item.ID == id);

  // sản phẩm muốn mua
  const productBuy = {
    id: product.ID,
    price: product.price,
    name: product.name,
    img: product.imageURL,
    quantity: 1,
    status: 0,
  };
  // Tìm nơi chứa sản phẩm của user
  const myCart = listCart.find((cart) => cart.email == userLogin.email);
  if (!myCart) {
    //nếu chưa có dữ liệu
    const newCart = {
      //tạo nơi chứa giỏ hàng mới
      email: userLogin.email, //có email login
      carts: [productBuy], //giỏ hàng gồm mảng nhiều sản phẩm []
    };
    listCart.push(newCart); // tạo mới listCart nếu chưa có , có rồi thì push sản phẩm mới vào
    localStorage.setItem("listCart", JSON.stringify(listCart)); //đẩy lên lại local
    displayQuantityCart();
    return;
  } else {
    //tạo biến newCart : tìm trong listCart có email = email đang login
    const newCart = listCart.find((cart) => cart.email == user.email);
    const carts = newCart.carts; // giỏ hàng

    const cart = carts.find(
      //tìm trong giỏ hàng có sản phẩm trùng với sản phẩm mún mua
      (product) => product.id == productBuy.id
    );
    if (cart) {
      //nếu có thì tăng số lượng lên
      cart.quantity += Number(quantityInput.value);
    } else {
      carts.push(productBuy); //nếu không có thì thêm sản phẩm muốn mua vào giỏ hàng
    }

    localStorage.setItem("listCart", JSON.stringify(listCart)); //gởi lên lại local
    displayQuantityCart();
  }
}
