let require = document.getElementsByClassName('require');
let submit = document.getElementById('submit');
submit.addEventListener('click', () =>{
    let input = document.querySelectorAll('.items > input');
    for(let i=0; i<input.length; i++){
        if(input[i].value==""){
            require[i].style.display = 'block';
        }
        else{
            require[i].style.display = 'none';
            
            if(input[2].value != input[3].value){
                require[3].innerText = '*Mật khẩu chưa trùng khớp';
                require[3].className = 'fail';
                return;
            }
            else{
                require[3].innerText = 'Mật khẩu hợp lệ';
                require[3].className = 'success';
            }
        }
    }
    // for(let i=0; i<input.length;i++){
        let password = document.getElementsByClassName('password');
        if((input[0].value!="" && input[1].value!="" && input[2].value!="" && input[3].value!="") && (password[0].value ==password[1].value)){
            var getEmail = document.getElementById('email')
            var getPassword = document.getElementById('password')
            const user = {
                email: getEmail.value,
                password: getPassword.value
            }
            var jsonString = JSON.stringify(user)
            localStorage.setItem(getEmail.value, jsonString)
                alert('Đăng ký thành công')
            
        // }   
    }
    else {
        alert('that bai')
    }
    
})








let eye = document.getElementsByClassName('fa-solid fa-eye');

for(let i=0; i<eye.length;i++){
    eye[i].addEventListener('click', (e) => {
        e.preventDefault();
        let password = document.getElementsByClassName('password');
        // console.log(password)
        if(password[i].type == 'password'){
            password[i].type = 'text';
            e.target.className='fa-solid fa-eye-slash';
        }
        else
        {
            password[i].type = 'password';
            e.target.className='fa-solid fa-eye';
        }
    });
}

// let eye = document.getElementsByClassName('fa-solid fa-eye');
// if(eye.length>0){
// for(let i=0; i<eye.length;i++){
//     eye[i].addEventListener('click', (e) => {
//         e.preventDefault();
//         let password = document.getElementsByClassName('password');
//         // console.log(password)
//         if(password[i].type == 'password'){
//             password[i].type = 'text';
//             eye[i].className='fa-solid fa-eye-slash';
//         }
//         else
//         {
//             password[i].type = 'password';
//             eye[i].className='fa-solid fa-eye';
//         }
//     });
// }
// }

