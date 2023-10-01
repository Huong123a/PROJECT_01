renderCart();
function renderCart() {
  const usersDB = JSON.parse(localStorage.getItem("users"));
  const userLogin = JSON.parse(localStorage.getItem("userLogin")) || {};
  const cartTableBody = document.querySelector(".table tbody");
  // Xóa nội dung hiện tại của giỏ hàng

  // Tạo HTML để hiển thị danh sách sản phẩm trong giỏ hàng
  let resurl = "";
  for (const user of usersDB) {
    if (user.email === userLogin.email) {
      user.cart?.forEach((item, index) => {
        if (user.cart.length === 0) {
          cartTableBody.innerHTML =
            '<tr><td colspan="6">Giỏ hàng trống.</td></tr>';
          return;
        }
        console.log(111, user.cart);
        resurl += `
        <tr>
          <td class="w-25">
            <img src="${item.imageURL}"
              class="img-fluid img-thumbnail" alt="Sản phẩm">
          </td>
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>${item.qantity.toLocaleString()}</td> 
          <td>${(item.price * item.qantity).toLocaleString()}VND</td>
          <td>
            <a href="#" class="btn btn-danger btn-sm" onclick="removeItemFromCart(${index})">
              <i class="fa fa-times"></i>
            </a>
          </td>
        </tr>
      `;
      });
    }
  }
  // Thêm HTML vào bảng giỏ hàng
  cartTableBody.innerHTML = resurl;
}

function removeItemFromCart(index) {
  const usersDB = JSON.parse(localStorage.getItem("users"));
  const userLogin = JSON.parse(localStorage.getItem("userLogin")) || {};
  // Xóa sản phẩm tại vị trí index
  for (const user of usersDB) {
    if (user.email === userLogin.email) {
      user.cart.splice(index, 1);
      console.log(888,user.cart);
      localStorage.setItem("users", JSON.stringify(usersDB));
     
  renderCart();
    }
  }

  // Lưu danh sách sản phẩm mới vào Local Storage
  

  // Hiển thị lại giỏ hàng sau khi xóa
}
// window.addEventListener("load", displayCart);
