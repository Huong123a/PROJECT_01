//login thành công
//+truy vấn đến users
//+kiểm tra dữ liệu local storage
//có-> render
//không->giữ nguyên

//b1: kiểm tra trên local có đăng nhập chưa
// lấy dữ liệu có tên "users" từ Local Storage
const users = JSON.parse(localStorage.getItem("users")) || [];
//lấy dữ liệu có tên "userLogin" từ Local Storage.
const userLogin = JSON.parse(localStorage.getItem("userLogin")) || {};
// lấy tham chiếu đến phần tử có id là "info-user"
const headerElement = document.querySelector("#info-user");
console.log(111, users);
console.log(222, userLogin);
console.log(headerElement);
for (const user of users) { // tìm người dùng có địa chỉ email trùng khớp với email của người dùng đã đăng nhập (userLogin.email)
  if (user.email === userLogin.email) {
    headerElement.innerHTML = `  <a href="./html/login.html">
        <i class="fa fa-user"></i>
        ${user.name}
    </a>`;
  }
}

//login thành công
//truy vấn đến the user
//kiểm tra dữ liệu local
checklogin()
function checklogin (){
  const userElement = document.getElementById('#info-user')
  const userLogin = JSON.parse(localStorage.getItem("users")) || {};
  if (userLogin.isLogin) {
    userElement.innerHTML = ``;
  }
}
 //user logout
 const logoutElement = document.querySelector("#user-logout");
 if (logoutElement) {
   logoutElement.addEventListener("click", function () {
     localStorage.removeItem("userLogin");
   });
 }