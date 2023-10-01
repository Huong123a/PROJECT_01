checklogin();
function checklogin() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  //lấy dữ liệu có tên "userLogin" từ Local Storage.
  // lấy tham chiếu đến phần tử có id là "info-user"
  const userElement = document.getElementById("info-user");
  console.log(userElement);
  const user = JSON.parse(localStorage.getItem("userLogin")) || {};
  if (user.isLogin) {
    userElement.textContent = ``;
  } else {
    userElement.textContent = `<a href="./auth/login.html/index.html">
    <i class="fa fa-user"></i>
    Tài khoản
  </a>`;
  }
}
//user logout
const logoutElement = document.querySelector("#user-logout");
if (logoutElement) {
  logoutElement.addEventListener("click", function () {
    localStorage.removeItem("userLogin");
  });
}
