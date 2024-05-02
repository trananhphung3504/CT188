// Bieu thuc chinh quy 

function validateEmail(email) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return mailformat.test(String(email).toLowerCase());
}
function checkPassword(password) {
  let pwdFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  return pwdFormat.test(String(password));
}



// checkvalid
let submit = document.getElementById("submit");
function checkValid() {
  let flag = true;
  let require = document.getElementsByClassName("require");
  let input = document.querySelectorAll(".items > input");
  for (let i = 0; i < input.length; i++) {
    if (input[i].value == "") {
      require[i].style.display = "block";
      // require[i].show(300);
      flag = false;
    } else {
      require[i].style.display = "none";
      flag = true;
      // require[i].hide(300)
    }
    if (input[2].value != input[3].value) {
      require[3].textContent = "*Mật khẩu chưa trùng khớp";
      require[3].classList.add("fail");
      require[3].style.display = "block";
      // require[i].show(300)
      flag = false;
    } else {
      require[3].style.display = "none";
        flag = true;
      // require[i].hide(300)
    }
  }
  return flag;
}
// Thong bao dang ki thanh cong 
submit.addEventListener("click", () => {
  let getEmail = document.getElementById("email");
  let getPassword = document.getElementById("password1");
  let getAccount = document.getElementById("account");
  if (checkValid() && validateEmail(getEmail.value) && checkPassword(getPassword.value) && getAccount.value.length >=4) {
    const user = {
      email: getEmail.value,
      password: getPassword.value,
    };
    let jsonString = JSON.stringify(user);
    localStorage.setItem(getEmail.value, jsonString);
    alert("Đăng ký thành công");
    window.location.href = `Dangnhap.html`;
  }
  else {
    alert("Sai định dạng mật khẩu hoặc email");
  }
});


// Bat tat co mat

let eye = document.getElementsByClassName("eye");
if (eye.length > 0) {
  for (let i = 0; i < eye.length; i++) {
    eye[i].addEventListener("click", (e) => {
      e.preventDefault();
      let password = document.getElementsByClassName("password");
      // console.log(password)
      if (password[i].type == "password") {
        password[i].type = "text";
        eye[i].className = "fa-solid fa-eye-slash eye";
      } else {
        password[i].type = "password";
        eye[i].className = "fa-solid fa-eye eye";
      }
    });
  }
}


