//lay du lieu
// const productID = //laays tu url 

const products = JSON.parse(localStorage.getItem("product"));
const product = products.find(p => p.id === productID)
//lay thong tin tu nguowi dung
const listUsers = JSON.parse(localStorage.getItem('listUsers'))
//neu chua dang nhap thi yeu cau dang nhap
if(!user){
  alert('Vui long dang nhap de mua hang')
  window.location.href= '/auth/login.html/index.html'

}
//truy van den noi render
const productDetailElement = document.querySelector(".product_detail-content");
let cartLocal = JSON.parse(localStorage.getItem("cart")) || [];

let html = `<h4>${product.name}</h4>
<h5>${product.price}</h5>

<p>Chọn số lượng:</p>
<div class="btn-quantity">
  <button class="btn-quantity-reduce">-</button>
  <input class="quantity-input" type="text" value="1">
  <button class="btn-quantity-add">+</button>
</div>

<div>
  <button class="product_detail-btn-buynow">Thêm vào giỏ hàng</button>

</div>

<h6>Mô tả sản phẩm</h6>
<hr />
${product.description}
`;
productDetailElement.innerHTML = html;

function addProduct() {
  // Lấy số lượng về
  let new_item = Number(document.querySelector(".quantity-input").value);
  // B2: Tìm tài khoản người dùng và thay đổi theo số lượng đó (lấy về)
  //  ----> Nếu trong giỏ hàng có sản phẩm --> cộng dồn lên
  // ----> Nếu không có sản phẩm --> thêm sản phẩm vào cart
  // B3: Đẩy lên localstorage
  // B4: render lại header

  addToCard(new_item);
}
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

//Tạo một hàm JavaScript để thêm sản phẩm vào giỏ hàng và lưu vào Local Storage:
function addToCart(productName, productPrice, quantity) {
  // Lấy danh sách sản phẩm từ Local Storage (nếu đã tồn tại)
  let productInCart = listUsers.cart.find(item=>item.productID===productId)
  if(productInCart){
    //Neu da co, cong dan so luong
    productInCart.quantity += quantity;
  }else{
    //neu chua co, them moi
    listUsers.cart.push{
      productID: productId,
      quantity: quantity,
      price: productPrice,
      

    }
  }

  }
   
  // Tạo một đối tượng sản phẩm
  const product = {
   
    quantity: quantity,
  }; name: productName,
    

  // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
  const existingProductIndex = cart.findIndex(
    (item) => item.name === productName
  );

  if (existingProductIndex !== -1) {
    // Nếu sản phẩm đã tồn tại trong giỏ hàng, cập nhật số lượng
    cart[existingProductIndex].quantity += quantity;
  } else {
    const listUser = JSON.parse(localStorage.getItem("listUsers")) || [];
    const userLogin = JSON.parse(localStorage.getItem("userLogin"));

    const userDB = listUser.find((user) => user.email == userLogin.email);

    if (userDB?.cart) {
      let isExist = false;
      for (const productCart of userDB.cart) {
        if (product.id === productCart.id) {
          productCart.quantity += quantity;
          isExist = true;
          break;
        }
      }
      if (!isExist) {
        userDB.cart.push(product);
      }
    } else {
      product.quantity = quantity;
      userDB.cart = [product];
    }

    localStorage.setItem("listUsers", JSON.stringify(listUser));
    // Nếu sản phẩm chưa có trong giỏ hàng, thêm vào danh sách
  }

  // Lưu danh sách sản phẩm vào Local Storage
  localStorage.setItem("listUsers", JSON.stringify(listUser));

  // Hiển thị thông báo cho người dùng
  alert("Mua hàng thành công. Đã thêm sản phẩm vào giỏ hàng");
}

//btn mua
const buyNowButton = document.querySelector(".product_detail-btn-buynow");
console.log(buyNowButton);
buyNowButton.addEventListener("click", function () {
  const productName = document.querySelector(
    ".product_detail-content h4"
  ).textContent;
  const productPrice = document.querySelector(
    ".product_detail-content h5"
  ).textContent;
  const quantityInput = document.querySelector(".quantity-input");
  const quantity = parseInt(quantityInput.value);
  console.log(quantity);

  addToCart(productName, productPrice, quantity);
  changeCartNumber();
});

function displayCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // const cartTableBody = document.querySelector('.table tbody');
  // console.log(cartTableBody);
  // cartTableBody.innerHTML = ''; // Xóa nội dung hiện tại của giỏ hàng

  // if (cart.length === 0) {
  //   cartTableBody.innerHTML = '<tr><td colspan="6">Giỏ hàng trống.</td></tr>';
  //   return;
  // }

  // Tạo HTML để hiển thị danh sách sản phẩm trong giỏ hàng
  const cartItemsHTML = cart.map(
    (item, index) => `
    <tr>
      <td class="w-25">
        <img src="../img/tay-te-bao-chet-paulas-choice-skin-perfecting-2-bha-liquid-exfoliate-10.webp"
          class="img-fluid img-thumbnail" alt="Sản phẩm">
      </td>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td class="qty"><input type="text" class="form-control" value="${
        item.quantity
      }"></td>
      <td>${item.price * item.quantity}VNĐ</td>
      <td>
        <a href="#" class="btn btn-danger btn-sm" onclick="removeItemFromCart(${index})">
          <i class="fa fa-times"></i>
        </a>
      </td>
    </tr>
  `
  );

  // Thêm HTML vào bảng giỏ hàng
  // cartTableBody.innerHTML = cartItemsHTML.join('');
}

function removeItemFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Xóa sản phẩm tại vị trí index
  cart.splice(index, 1);

  // Lưu danh sách sản phẩm mới vào Local Storage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Hiển thị lại giỏ hàng sau khi xóa
  displayCart();
  changeCartNumber();
}
window.addEventListener("load", displayCart);

//
//
const tenSanPham = document.querySelector("h4").textContent;
const giaSanPham = document.querySelector("h5").textContent;
const moTaSanPham = document.querySelector("h6").nextSibling.textContent.trim();

const thongTinSanPham = {
  ten: tenSanPham,
  gia: giaSanPham,
  moTa: moTaSanPham,
  soLuong: 1,
};

const thongTinSanPhamJSON = JSON.stringify(thongTinSanPham);

// Lưu chuỗi JSON vào local storage
localStorage.setItem("thongTinSanPham", thongTinSanPhamJSON);
//
function addToCard(quantity) {
  const product = JSON.parse(localStorage.getItem("product"));
  const listUser = JSON.parse(localStorage.getItem("listUsers")) || [];
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));

  const userDB = listUser.find((user) => user.email == userLogin.email);
  console.log(userDB, 11111111111);

  if (userDB?.cart) {
    let isExist = false;
    for (const productCart of userDB.cart) {
      if (product.id === productCart.id) {
        productCart.quantity += quantity;
        isExist = true;
        break;
      }
    }
    if (!isExist) {
      userDB.cart.push(product);
    }
  } else {
    product.quantity = quantity;
    userDB.cart = [product];
  }

  localStorage.setItem("listUsers", JSON.stringify(listUser));
  changeCartNumber();
}
