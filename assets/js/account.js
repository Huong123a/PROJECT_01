// //Trích xuất dữ liệu từ local storage
// const userData = JSON.parse(localStorage.getItem('user'));

// //Gán dữ liệu từ userData vào các trường nhập trong biểu mẫu:
// document.getElementById('input-username').value = userData.username;
// document.getElementById('input-email').value = userData.email;
// document.getElementById('input-first-name').value = userData.firstName;
// document.getElementById('input-last-name').value = userData.lastName;
// document.getElementById('input-address').value = userData.address;
// document.getElementById('input-phone').value = userData.phone;
// document.getElementById('input-city').value = userData.city;
// document.getElementById('input-country').value = userData.country;
window.addEventListener("load", () => {
  const userData = JSON.parse(localStorage.getItem("user"));

  if (userData) {
    document.getElementById("input-username").value = userData.username;
    document.getElementById("input-email").value = userData.email;
    document.getElementById("input-first-name").value = userData.firstName;
    document.getElementById("input-last-name").value = userData.lastName;
    document.getElementById("input-address").value = userData.address;

    document.getElementById("input-phone").value = userData.phone;
    document.getElementById("input-city").value = userData.city;
    document.getElementById("input-country").value = userData.country;
  }
});

document.getElementById("editButton").addEventListener("click", () => {
  const userData = JSON.parse(localStorage.getItem("user"));

  if (userData) {
    document.getElementById("input-username").value = userData.username;
    document.getElementById("input-email").value = userData.email;
    document.getElementById("input-first-name").value = userData.firstName;
    document.getElementById("input-last-name").value = userData.lastName;
    document.getElementById("input-address").value = userData.address;
    document.getElementById("input-phone").value = userData.phone;
    document.getElementById("input-city").value = userData.city;
    document.getElementById("input-country").value = userData.country;
  }
});
document
  .querySelector(".btn.btn-sm.btn-primary")
  .addEventListener("click", () => {
    // Lấy dữ liệu từ các trường nhập trong form
    const username = document.getElementById("input-username").value;
    const email = document.getElementById("input-email").value;
    const firstName = document.getElementById("input-first-name").value;
    const lastName = document.getElementById("input-last-name").value;
    const address = document.getElementById("input-address").value;
    const phone = document.getElementById("input-phone").value;
    const city = document.getElementById("input-city").value;
    const country = document.getElementById("input-country").value;

    // Tạo một đối tượng userData từ dữ liệu thu thập được
    const userData = {
      username,
      email,
      firstName,
      lastName,
      address,
      phone,
      city,
      country,
    };

    // Lưu đối tượng userData vào localStorage dưới tên "user"
    localStorage.setItem("user", JSON.stringify(userData));

    // Hiển thị thông báo cho người dùng
    alert("Thông tin đã được lưu lại!");
  });
