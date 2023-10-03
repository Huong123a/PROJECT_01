rederProductDetail();
function rederProductDetail() {
  const params = new URLSearchParams(document.location.search);
  const id = params.get("id");
  console.log(1111, id);
  const productsDB = JSON.parse(localStorage.getItem("products"));
  console.log(333, productsDB);
  const productDetailElement = document.querySelector(
    ".product_detail-container"
  );
  console.log(222, productDetailElement);

  for (const product of productsDB) {
    if (product.ID === id) {
      productDetailElement.innerHTML = `<section class="banner-product product_detail-banner">
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${product.imageURL}" class="d-block" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="${product.imageURL}" class="d-block" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="${product.imageURL}"
              class="d-block" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <section class="product_detail-content">
      <h4>${product.name}</h4>
      <h5>Giá: ${product.price.toLocaleString()}VNĐ</h5>
  
      <p>Chọn số lượng:</p>
      <div class="btn-quantity">
        <button class="btn-quantity-reduce" onclick='handleQuantityReduce()'>-</button><input class="quantity-input" type="text" >
        <button class="btn-quantity-add" onclick='handleQuantityAdd()'>+</button>
      </div>
  
      <div>
        <a><button type='button' class="btn-add-product_detail" onclick='handleAddCart("${
          product.ID
        }")'>
           Thêm vào giỏ hàng
          </button></a> <br>
  
        <button class="product_detail-btn-buynow">Mua ngay</button>
  
      </div>
  
      <h6>Mô tả sản phẩm</h6>
      <hr />
     ${product.description}
    </section>
      `;
    }
  }
}
let quantityInputElement = document.querySelector(".quantity-input");
quantityInputElement.value = 1;
console.log(34545, Number(quantityInputElement.value));
function handleAddCart(id) {
  console.log(666, id);
  const productsDB = JSON.parse(localStorage.getItem("products"));
  const usersDB = JSON.parse(localStorage.getItem("users"));
  const userLogin = JSON.parse(localStorage.getItem("userLogin")) || {};
  let productUser = {};
  for (const product of productsDB) {
    //  nếu trùng id thì xem xét tiếp
    //  xem có sản phẩm nào trong giỏ hàng chưa, nếu có thì cộng số lượng, nếu chưa thì thêm mới
    if (product.ID === id) {
      productUser = {
        ...product,
        quantity: Number(quantityInputElement.value),
      };
      break;
    }
  }
  let user = {};
  for (const userItem of usersDB) {
    if (userItem.email === userLogin.email) {
      user = userItem;
      break;
    }
  }

  if (user.cart) {
    let isExist = false;
    for (const product of user.cart) {
      if (product.ID === id) {
        product.quantity += Number(quantityInputElement.value);
        isExist = true;
        break;
      }
    }
    if (!isExist) {
      user.cart.push(productUser);
    }
  } else {
    user.cart = [productUser];
  }

  for (const userItem of usersDB) {
    if (userItem.email === userLogin.email) {
      userItem.cart = user.cart;
      break;
    }
  }

  localStorage.setItem("users", JSON.stringify(usersDB));
  console.log(333, usersDB);

  //  cập nhật lại số lượng sản phẩm trong giỏ hàng

  location.href = "/pages/user/cart/index.html";
}

function handleQuantityAdd() {
  console.log(9999999);
  quantityInputElement.value = Number(quantityInputElement.value) + 1;
  console.log(1231233, quantityInputElement.value);
}
function handleQuantityReduce() {
  console.log(9999999);
  if (Number(quantityInputElement.value) > 1) {
    quantityInputElement.value = Number(quantityInputElement.value) - 1;
  } else {
    quantityInputElement.value = 1;
  }
  console.log(1231233, quantityInputElement.value);
}
