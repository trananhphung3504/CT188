// Thong bao dang nhap
let sign_in = document.querySelector('.sign_in');
// console.log(sign_in)
sign_in.addEventListener("click", (e) => {
    e.preventDefault();
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let data = localStorage.getItem(email.value);
    const user = JSON.parse(data)
    if(user && user.email == email.value && user.password == password.value){
        alert('Đăng nhập thành công')
        window.location.href = `index.html`;
    }
    else {
        alert('Đăng nhập thất bại')
    }
});

let eye = document.querySelector(".inputRow>i");
// console.log(eye)
    eye.addEventListener("click", (e) => {
      e.preventDefault();
      let password = document.getElementById("password");
      console.log(password)
      if (password.type == "password") {
        password.type = "text";
        eye.className = "fa-solid fa-eye-slash eye";
      } else {
        password.type = "password";
        eye.className = "fa-solid fa-eye eye";
      }
    });