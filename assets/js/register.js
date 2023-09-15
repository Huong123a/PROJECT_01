// truy van den form
const formEl = document.querySelector("#form-register");
// truy van den cac phan tu trong form
const emailEl = document.querySelector("#email");
const nameEl = document.querySelector("#name");
const passwordEl = document.querySelector("#password");
const repeatPassEl = document.querySelector("#repeat-password");
//addevent cho form
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  // B1: Lấy user

  const user = getUser();

  //  Validator
  const error = checkError(user);

  //
  renderError(error);
  if (error.isError) {
    return;
  }

  //kiểm tra trùng dữ liệu trên local
  const users = JSON.parse(localStorage.getItem("users")) || [];

  let isCheck = false;
  console.log(users);
  for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
    if (users[i].email === user.email) {
      isCheck = true;
      break;
    }
  }
  //   B4: Điều hướng login
  if (!isCheck) {
    // Ok --> đẩy lên local
    delete user.repeatPass;
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    // Điều hướng login
    document.location.href = "/html/login.html";
  } else {
    error.isError = true;
    error.msgEmail = "Email đã tồn tại. Vui lòng nhập email khác.";
    renderError(error);
  }
});

function getUser() {
  return {
    email: emailEl.value.trim(),
    name: nameEl.value.trim(),
    password: passwordEl.value.trim(),
    repeatPass: repeatPassEl.value.trim(),
  };
}


//Hiển thị lỗi
function renderError(error) {
  //truy van den the hien thi loi
  const emailErrorElement = document.querySelector(".email-error");
  const nameErrorElement = document.querySelector(".name-error");
  const passwordElement = document.querySelector(".password-error");
  const repeatPassElement = document.querySelector(".rpp-error");
  //hien thi loi
  emailErrorElement.textContent = error.msgEmail;
  nameErrorElement.textContent = error.msgName;
  passwordElement.textContent = error.msgPassword;
  repeatPassElement.textContent = error.msgPasswordConfirm;
}

function checkError(user) {
  const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const error = {
    isError: false,
    msgEmail: "",
    msgName: "",
    msgPassword: "",
    msgPasswordConfirm: "",
  };

  //check mail
  if (!user.email) {
    error.isError = true;
    error.msgEmail = "Email không được để trống";
  } else if (!validRegex.test(user.email)) {
    error.isError = true;
    error.msgEmail = "Email không đúng định dạng";
  }

  //check name
  if (!user.name) {
    error.isError = true;
    error.msgName = "Tên không được để trống";
  } else if (user.name.length < 6) {
    console.log(user.name);
    error.isError = true;
    error.msgName = " Ít nhất 6 ký tự";
  }

  //check password
  if (!user.password) {
    error.isError = true;
    error.msgPassword = "Mật khẩu không được để trống";
  } else if (user.password.length < 6) {
    error.isError = true;
    error.msgPassword = "Ít nhất 6 ký tự";
  } else if (user.password.length > 20) {
    error.isError = true;
    error.msgPassword = "Không vượt quá 20 ký tự";
  }

  //check repeat password
  if (!user.repeatPass) {
    error.isError = true;
    error.msgPasswordConfirm = "Xác nhận mật khẩu";
  } else if (user.repeatPass !== user.password) {
    error.isError = true;
    error.msgPasswordConfirm = "Mật khẩu không khớp";
  }

  //return all errors
  return error;
}
