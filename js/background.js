const imgs = ["1.jpg", "2.jpg", "3.jpg"];

const todayImg = imgs[Math.floor(Math.random() * imgs.length)];

const bg = document.createElement("img");

bg.src = `img/${todayImg}`;

document.body.appendChild(bg); //append : 뒤에 기입, prepend : 앞에 기입

console.log(bg);

