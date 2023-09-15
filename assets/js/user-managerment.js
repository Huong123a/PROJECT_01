// Lấy users đăng nhập từ local storage về email, id,...
displayUsers();
function displayUsers() {
  const users = JSON.parse(localStorage.getItem("listUsers")) || [];
  console.log(users);
  const userList = document.querySelector("#list-user tbody");
  let html = "";
  console.log(users);
  users.forEach((user, index) => {
    html += `<tr>
    <td>${index + 1}</td>
    <td>${user.username || "Chưa có"}</td>
    <td>${user.email || "Chưa có"}</td>
    <td>${user.fullName || "Chưa có"}</td>
    <td>${user.role || "Chưa có"}</td>
    <td>${user.status || "Chưa có"}</td>
    <td class="td-action">
      <button class="action view primary-color"  data-bs-toggle="modal" data-bs-target="#form-product" onclick='handleViewUser("${
        user.email
      }")'>View</button>
      <button class="action block secondary-color">Block</button>
    </td>
  </tr>`;
  });
  userList.innerHTML = html;
}

//Hàm hiển thị thông tin người dùng
//Lấy thông tin người dùng từ local storage
//lay du lieu ve
const listUsers = JSON.parse(localStorage.getItem("listUsers")) || [];
//truy van den tat ca phan tu form
const emailEl = document.querySelector("#email");
const nameEl = document.querySelector("#name");
const addressEl = document.querySelector("#address");
const phoneEl = document.querySelector("#phone");
const statusEl = document.querySelector("#status");
renderListUsers(listUsers);
function renderListUsers(list) {
  let html = "";
  list.forEach(function (user, index) {
    html += `<tr>
    <td>${index + 1}</td>
    <td>${user.username || "Chưa có"}</td>
    <td>${user.email || "Chưa có"}</td>
    <td>${user.fullName || "Chưa có"}</td>
    <td>${user.role || "Chưa có"}</td>
    <td>${user.status || "Chưa có"}</td>
    <td class="td-action">
      <button class="action view primary-color"  data-bs-toggle="modal" data-bs-target="#form-product" onclick='handleViewUser("${
        user.email
      }")'>View</button>
      <button class="action block secondary-color">Block</button>
    </td>
  </tr>`;
  });
};
   
  //truy van den phan tu de render
  const listUsersEl = document.querySelector("#list-user tbody");
  listUsersEl.innerHTML = html;

//view user info
function handleViewUser(email) {
  const user = listUsers.find((user) => user.email === email);
  emailEl.value = user.email;
  nameEl.value = user.name;
  addressEl.value = user.address;
  phoneEl.value = user.phone;
  statusEl.value = user.status;
}