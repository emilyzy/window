const btn1s = document.querySelectorAll(".btn1");
const box = document.querySelector("#big-box");
const mousebody1 = document.querySelector("#mousebody1");
const l = btn1s.length;
let n = 0;
for (let i = 0; i < l; i++) {
    btn1s[i].onclick = function () {
        for (let j = 0; j < l; j++) {
            btn1s[j].classList.remove("btn1-active");
        }
        this.classList.add("btn1-active");
        box.style.marginLeft = -i * 1440 + "px";
        n = i;
        /*console.log(box);*/
    }
}
/*添加自动轮播效果*/
let t;
t = setInterval(move, 5000);

function move() {
    n++;
    if (n === 4) {
        n = 0;
    }
    for (let j = 0; j < l; j++) {
        btn1s[j].classList.remove("btn1-active");
    }
    btn1s[n].classList.add("btn1-active");
    box.style.marginLeft = -n * 1440 + "px";
}

/*添加鼠标事件*/
mousebody1.onmouseenter = function () {
    clearInterval(t);
};
mousebody1.onmouseleave = function () {
    t = setInterval(move, 5000);
};