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
          <td>${item.quantity}</td>
          <td>${(item.price * item.quantity).toLocaleString()}VND</td>
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
      console.log(888, user.cart);
      localStorage.setItem("users", JSON.stringify(usersDB));
    }
  }

  renderCart();
  // Lưu danh sách sản phẩm mới vào Local Storage

  // Hiển thị lại giỏ hàng sau khi xóa
}
// window.addEventListener("load", displayCart);
function addProduct(index) {}

function checkSumPay() {
  // <p id="text-center">Money</p>
  const valueTotal = document.querySelector("#text-center");
  // lấy giá trị từ localstorage cart, tính tổng tiền
  const usersDB = JSON.parse(localStorage.getItem("users"));
  const userLogin = JSON.parse(localStorage.getItem("userLogin")) || {};
  let total = 0;
  for (const user of usersDB) {
    if (user.email === userLogin.email) {
      user.cart?.forEach((item, index) => {
        total += item.price * item.quantity;
      });
    }
  }
  valueTotal.innerHTML = total.toLocaleString() + "VND";
}

//  <form>
{
  /* <div class="form-group">
<label for="fullName">Họ Tên</label>
<input type="text" class="form-control" id="fullName" placeholder="Nhập Họ Tên">
</div>
<div class="form-group">
<label for="phoneNumber">Số Điện Thoại</label>
<input type="tel" class="form-control" id="phoneNumber"
    placeholder="Nhập Số Điện Thoại">
</div>
<div class="form-group">
<label for="address">Địa Chỉ</label>
<textarea class="form-control" id="address" rows="3"
    placeholder="Nhập Địa Chỉ"></textarea>
</div>
</form> */
}

function checkOut() {
  // lấy giá trị từ localstorage userLogin, hiển thi lên form lưu thông tin vào Payment
  const fullName = document.querySelector("#fullName");
  const phoneNumber = document.querySelector("#phoneNumber");
  const address = document.querySelector("#address");
  // const usersDB = JSON.parse(localStorage.getItem("userLogin"));
  // lấy giá trị từ localstorage cart, tính tổng tiền
  const usersDB = JSON.parse(localStorage.getItem("users"));
  const userLogin = JSON.parse(localStorage.getItem("userLogin")) || {};
  let total = 0;
  const paymentArr = [];
  for (const user of usersDB) {
    if (user.email === userLogin.email) {
      user.cart?.forEach((item, index) => {
        total += item.price * item.quantity;
      });
      paymentArr.push(user.cart);
    }
  }
  // lưu thông tin vào Payment
  const payment = {
    fullName: fullName.value,
    phoneNumber: phoneNumber.value,
    address: address.value,
    email: usersDB.email,
    total: total,
    paymentArr: paymentArr,
  };
  // gọi từ localstorage payment, tính tổng tiền
  let payments = JSON.parse(localStorage.getItem("payment"))||[];
  payments.push(payment);
  localStorage.setItem("payment", JSON.stringify(payments));
}
