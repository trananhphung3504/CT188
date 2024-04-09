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

const banner = document.querySelector('.banner');
// console.log(banner);
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let bannerIndex = 0;

function show(i){
  if(i<0)
    bannerIndex = banner.children.length - 1;
  else if(i>=banner.children.length)
    bannerIndex = 0;
  const offset = -bannerIndex * 100;
    banner.style.transform = "translateX(" + offset + "%)";      
}

prev.addEventListener('click', ()=>{
  bannerIndex--;
  show(bannerIndex);
});
next.addEventListener('click', ()=>{
  bannerIndex++;
  show(bannerIndex);
});

setInterval(()=>{
  bannerIndex++;
  show(bannerIndex);
}, 1500);


// var img = document.querySelectorAll('.news__content_items img');
// var content = document.querySelector('.news__content_items a');
// var news = document.querySelectorAll('.news__content_items');
// var img_main = document.querySelector('.newsmain__content_items img');
// var content_main = document.querySelector('.newsmain__content_items a');
var img = document.getElementById('img_main');
var content = document.getElementById('content');
console.log(content);
var p = document.getElementById('p');

// var indexcurrent;
// news.addEventListener('click', function change(){
//   img_main.src = img[indexcurrent].src;
// });
// img.forEach((item, index) =>
//     item.addEventListener('click', function(){
//         currentIndex = index;
//         change();
//     })
// )

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
    img.innerHTML = `<img src="img/new_5.gif" alt="">`
    content.innerHTML = `HUPGTI'shop tự tin chất lượng và sản phẩm sẽ được xuất khẩu trong năm nay`;
    p.innerHTML = ``;
  }
}