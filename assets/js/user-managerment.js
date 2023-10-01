// Lấy users đăng nhập từ local storage về email, id,...
const users = JSON.parse(localStorage.getItem("users")) || [];
console.log(users)
displayUsers(users);
function displayUsers(data) {
  const userList = document.querySelector("#list-user");
  let html = "";
  console.log(users);
  data.forEach((user, index) => {
    html += `<tr>
    <td>${index + 1}</td>
    <td>${user.email}</td>
    <td>${user.name}</td>
    <td>${user.address || ""}</td>
    <td>${user.gender ? "Nam" : "Nữ"}</td>
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


function handleViewUser(email) {
  const listUsers = JSON.parse(localStorage.getItem("users")) || [];
  //truy van den tat ca phan tu form
  const emailEl = document.querySelector("#email");
  const nameEl = document.querySelector("#name");
  const addressEl = document.querySelector("#address");
  const phoneEl = document.querySelector("#phone");
  const genderEl = document.querySelector("#gender");

  const user = listUsers.find((user) => user.email === email);
  emailEl.value = user.email;
  nameEl.value = user.name;
  addressEl.value = user.address || "";
  phoneEl.value = user.phone || "";
  genderEl.value = user.gender ? "Nam" : "Nữ";
}
function searchUser() {
  const searchElement = document
    .querySelector("#input-search-user")
    .value.toLowerCase();
  const users = getDataFromLocalStorage("users");
  const searchUser = users.filter((user) => {
    return user.name.toLowerCase().includes(searchElement);
  });
  displayUsers(searchUser);
}

// function searchProductEl(){
//   const searchProducT = document.querySelector('#search-product').value.toLowerCase();
//   const products =getDataFromLocalStorage('products');
//   const searchProductEl = products.filter((product)=>{
//     return product.name.toLowerCase().includes(searchProductEl)
//   });
  
// }
