// Chữ chạy màu
const geth1 = document.querySelector(".content h1");
const geth12 = document.querySelector(".feature__product-content h1");
// console.log(geth1);
// console.log(geth12);
setInterval(function () {
  setTimeout(function () {
    geth1.style.color = "#114232";
  }, 500);
  setTimeout(function () {
    geth1.style.color = "#87A922";
  }, 800);
  setTimeout(function () {
    geth1.style.color = "#FCDC2A";
  }, 1100);
  setTimeout(function () {
    geth1.style.color = "#FF8E8F";
  }, 1300);
  setTimeout(function () {
    geth1.style.color = "#F2C18D";
  }, 1500);
}, 1500);

setInterval(function () {
  setTimeout(function () {
    geth12.style.color = "#F2C18D";
  }, 500);
  setTimeout(function () {
    geth12.style.color = "#FF8E8F";
  }, 800);
  setTimeout(function () {
    geth12.style.color = "#114232";
  }, 1100);
  setTimeout(function () {
    geth12.style.color = "#FCDC2A";
  }, 1300);
  setTimeout(function () {
    geth12.style.color = "#87A922";
  }, 1500);
}, 1500);


// Slide show
const banner = document.querySelector('.banner');
console.log(banner);
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let bannerIndex = 0;

function Slideshow(i){
  if(i<0)
    bannerIndex = banner.children.length - 1;
  else if(i>=banner.children.length)
    bannerIndex = 0;
  const offset = -bannerIndex * 100;
    banner.style.transform = `translateX(${offset}%)`;      
}

prev.addEventListener('click', ()=>{
  bannerIndex--;
  Slideshow(bannerIndex);
});
next.addEventListener('click', ()=>{
  bannerIndex++;
  Slideshow(bannerIndex);
});

setInterval(()=>{
  bannerIndex++;
  Slideshow(bannerIndex);
}, 1500);




// Show image
var img = document.getElementById('img_main');
var content = document.getElementById('content');
console.log(content);
var p = document.getElementById('p');

function show(x){
  if(x==1){
    img.innerHTML = `<img src="img/news_img-1.jpeg" alt="">`;
    content.innerHTML = `HUPGTI'shop được bộ công thương đánh giá cao về chất lượng sản phẩm`;
    p.innerHTML = ``;
  }
  else if(x==2){
    img.innerHTML = `<img src="img/news_img-2.jpg" alt="">`;
    content.innerHTML = `Cùng nhìn lại hành trình upgrade đầy ấn tượng của HUPNTI'shop`;
    p.innerHTML = ``;
  }
  else if(x==3){
    img.innerHTML = `<img src="img/new_3.jpeg" alt="">`;
    content.innerHTML = `Thể lệ chương trình "Trạm hạnh phúc cùng HUPGTI'shop`;
    p.innerHTML = ``;
  }
  else if(x==4){
    img.innerHTML = `<img src="img/new_4.jpeg" alt="">`
    content.innerHTML = `Thể lệ cào quà liền tay trúng ngay quà khủng cùng HUPGTI'shop`;
    p.innerHTML = ``;
  }
  else if(x==5){
    img.innerHTML = `<img src="img/new_5.jpeg" alt="">`
    content.innerHTML = `HUPGTI'shop tự tin chất lượng và sản phẩm sẽ được xuất khẩu trong năm nay`;
    p.innerHTML = ``;
  }
}

// Clock
setInterval(function() {
  var days = document.getElementById('day')
  var times = document.getElementById('time')
  var noons= document.getElementById('noon')
  var hi= document.getElementById('hi')
  var icon = document.getElementById('icon')
  var frame = document.querySelector('.frame')


  var d = new Date();
  var day = d.getDay();
  var hour = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  // console.log(day, hour, min, sec);
  // console.log(d);
  var date = [
      "Sunday",
      "Monday", 
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
  ]
  
  if(hour < 10) {
      hour = "0" + hour;
  }
  if(min < 10) {
      min = "0" + min;
  }
  if(sec < 10) {
      sec = "0" + sec;
  }
  days.innerText = date[day];
  days.classList.add('color');

  var time = hour + ":" + min + ":" + sec;
  // times.innerHTML = "<h1>" + time + "</h1>";
  times.innerText =  time;
  times.classList.add('color');
  var check = hour>12 ? "PM" : "AM";
  noons.innerText = check;
  var hello = hour>12 ? "Good evening" : "Good morning"
  hi.innerText = hello;
  var icon_clock = hour<12 ? `<i class="fa fa-cloud-sun"></i>` : `<i class="fa fa-cloud-moon"></i>`;
  icon.innerHTML = icon_clock;
}, 1000)