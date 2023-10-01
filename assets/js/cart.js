function displayCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const cartTableBody = document.querySelector(".table tbody");
  cartTableBody.innerHTML = ""; // Xóa nội dung hiện tại của giỏ hàng

  if (cart.length === 0) {
    cartTableBody.innerHTML = '<tr><td colspan="6">Giỏ hàng trống.</td></tr>';
    return;
  }

  // Tạo HTML để hiển thị danh sách sản phẩm trong giỏ hàng
  const cartItemsHTML = cart.map((item, index) => {
    console.log(item);
    return `
      <tr>
        <td class="w-25">
          <img src="../img/tay-te-bao-chet-paulas-choice-skin-perfecting-2-bha-liquid-exfoliate-10.webp"
            class="img-fluid img-thumbnail" alt="Sản phẩm">
        </td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td class="qty"><input type="text"  value="${
          item.quantity
        }" readonly></td> 
        <td>${item.price * item.quantity}VND</td>
        <td>
          <a href="#" class="btn btn-danger btn-sm" onclick="removeItemFromCart(${index})">
            <i class="fa fa-times"></i>
          </a>
        </td>
      </tr>
    `;
  });

  // Thêm HTML vào bảng giỏ hàng
  cartTableBody.innerHTML = cartItemsHTML.join("");
}

function removeItemFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Xóa sản phẩm tại vị trí index
  cart.splice(index, 1);

  // Lưu danh sách sản phẩm mới vào Local Storage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Hiển thị lại giỏ hàng sau khi xóa
  displayCart();
  changeCartNumber()
}
window.addEventListener("load", displayCart);
