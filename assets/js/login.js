
// truy van den form
const formEl = document.querySelector("#form-login");
// truy van den cac phan tu trong form
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");

//addevent cho form
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  // B1: Lấy user

  const user = getUser();
  console.log(user);

  //  Validator
  const error = checkError(user);

  // hiển thị lỗi
  renderError(error);
  if (error.isError) {
    return;
  }
  //kiểm tra trùng dữ liệu trên local
  const users = JSON.parse(localStorage.getItem("users")) || [];
  let isError = false; // dat bien check loi trung lap
  //chay vong lap du lieu tren local so sanh voi user.email
  if (users.length > 0) {
    for (let i = 0; i < users.length; i++) {
      console.log(i);
      if (users[i].email === user.email) {
        if (users[i].password === user.password) {
          break; // dừng lai luôn
        } else {
          error.msgPassword = "Incorrect password, please check again";
          isError = true;
          break; // dừng lai , để k chạy code bên dưới
        }
      }
    }
  } else {
    error.msgEmail = "Incorrect email, please check again";
    isError = true;
  }
  if (isError) {
    renderError(error);
    return;
  } else {
    // // B4: Điều hướng login
    const userLogin = {
      email: user.email,
      isLogin: true,
    };
    localStorage.setItem("userLogin", JSON.stringify(userLogin));
    document.location.href = "/index.html";
  }
});

function getUser() {
  return {
    email: emailEl.value.trim(),
    password: passwordEl.value.trim(),
  };
}

//Hiển thị lỗi
function renderError(error) {
  //truy van den the hien thi loi
  const emailErrorElement = document.querySelector(".error-email");
  const passwordElement = document.querySelector(".error-password");
  //hien thi loi
  emailErrorElement.textContent = error.msgEmail;
  passwordElement.textContent = error.msgPassword;
}

function checkError(user) {
  const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const error = {
    isError: false,
    msgEmail: "",
    msgPassword: "",
  };

  //check mail
  if (!user.email) {
    error.isError = true;
    error.msgEmail = "Email không được để trống";
  } else if (!validRegex.test(user.email)) {
    error.isError = true;
    error.msgEmail = "Email không đúng định dạng";
  }

  //check password
  if (!user.password) {
    error.isError = true;
    error.msgPassword = "Mật khẩu không được để trống";
  } else if (user.password.length < 6) {
    error.isError = true;
    error.msgPassword = "Mật khẩu chứa ít nhất 6 ký tự";
  } else if (user.password.length > 20) {
    error.isError = true;
    error.msgPassword = "Mật khẩu không vượt quá 20 ký tự";
  }

  //return all errors
  console.log(error);
  return error;
}

