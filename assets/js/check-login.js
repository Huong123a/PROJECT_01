checklogin();
function checklogin() {
  const usersDB = JSON.parse(localStorage.getItem("users")) || [];
  //lấy dữ liệu có tên "userLogin" từ Local Storage.
  // lấy tham chiếu đến phần tử có id là "info-user"
  const userElement = document.getElementById("info-user");
  const userLogout = document.getElementById("user-logout");
  const userLogin = JSON.parse(localStorage.getItem("userLogin")) || {};
  for (const user of usersDB) {
    if (userLogin.email === user.email) {
      userLogout.style.display = "block";
      userElement.innerHTML = `<a href="">
      <i class="fa fa-user"></i>
      ${user.name}
    </a>`;
    } else {
      userLogout.style.display = "none";
    }
  }
}
//user logout
const logoutElement = document.querySelector("#user-logout");
if (logoutElement) {
  logoutElement.addEventListener("click", function () {
    localStorage.removeItem("userLogin");
  });
}
