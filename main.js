// 初始化用户窗口大小

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

// 以下是名片按钮功能

const QQ = document.querySelector("#qq");
const WeChat = document.querySelector("#wechat");
const Telegram = document.querySelector("#telegram");
const X = document.querySelector("#x");
const GitHub = document.querySelector("#github");
const BiliBili = document.querySelector("#bilibili");

X.addEventListener('click', function() {
    window.open('https://x.com/cha_li_jin');
    });

GitHub.addEventListener('click', function() {
    window.open('https://github.com/tsaritsynowo');
    });

BiliBili.addEventListener('click', function() {
    window.open('https://space.bilibili.com/225039804');
    });

//以下是画布动画

const canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
      
    }
  }

  draw();

//以下是介绍引入功能

const introduction = document.querySelector("#my-introduction");

async function getintro() {
    let Response = await fetch("https://tsaritsynowo.github.io/intro.json")
    let introlist = await Response.json();
    let ran = Math.floor(Math.random() * introlist.length);
    introduction.innerHTML = introlist[ran];
};

getintro();