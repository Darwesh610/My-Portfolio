let open = document.getElementById("open");
let close = document.getElementById("close");
let nav = document.querySelectorAll(".link");

let cont = document.querySelector(".container2");


open.addEventListener("click", () => cont.classList.add("show-nav"))
close.addEventListener("click", () => cont.classList.remove("show-nav"))

nav.forEach((e) => {
e.addEventListener('click' , () => {
    cont.classList.remove("show-nav")
})
})


let circle = document.querySelector(".circle1");
let chatNote = document.getElementById("chatNote");




let chatTime = setInterval(() => {
    $(".circle1").show(500);
    $("#chatNote").css('display' , 'flex');
    $("#chatNote").show(500);
}, 3000)


let clearChat = setInterval(() => {
    $(".circle1").slideUp(500);
    $("#chatNote").slideUp(500);
}, 7000)

let a = document.getElementById("scrollSec")

a.addEventListener('scroll' , (e) => {
    if (e.target.scrollTop > 360){
        $(".java").css('animation' , 'skills 1s linear')
    }
    if (e.target.scrollTop > 390){
        $(".react").css('animation' , 'skills 1s linear')
    }
    if (e.target.scrollTop > 410){
        $(".angular").css('animation' , 'skills 1s linear')
    }
    if (e.target.scrollTop > 430){
        $(".node").css('animation' , 'skills 1s linear')
    }
    if (e.target.scrollTop > 450){
        $(".database").css('animation' , 'skills 1s linear')
    }
})

window.addEventListener('scroll' , (e) => {
    console.log(e.target.scrollingElement.scrollTop);

    if (e.target.scrollingElement.scrollTop > 1000){
        $(".java").css('animation' , 'skills 1s linear')
    }
    if (e.target.scrollingElement.scrollTop > 1020){
        $(".react").css('animation' , 'skills 1s linear')
    }
    if (e.target.scrollingElement.scrollTop > 1040){
        $(".angular").css('animation' , 'skills 1s linear')
    }
    if (e.target.scrollingElement.scrollTop > 1060){
        $(".node").css('animation' , 'skills 1s linear')
    }
    if (e.target.scrollingElement.scrollTop > 1080){
        $(".database").css('animation' , 'skills 1s linear')
    }
})

window.addEventListener("scroll" , (e) => {
    if(e.target.scrollingElement.scrollTop > 600){
        $(".up").css("display" , "flex");
        $(".down").css("display" , "none");
        $('#backArrow').on('click' , () => {
            e.target.scrollingElement.scrollTop = 0;
        })
    }else {
        $(".up").css("display" , "none");
        $(".down").css("display" , "flex");
        $('#backArrow').on('click' , () => {
            e.target.scrollingElement.scrollTop = 640;
        })
    }
})







const textspan = document.querySelector(".typed-text");
const textarray = ["Designer", "Developer", "Freelancer"];
const typingdelay = 200;
const earserdelay = 100;
const newtextdelay = 100;
let textarrayindex = 0;
let charindex = 0;

function type() {
    if (charindex < textarray[textarrayindex].length) {
        textspan.textContent += textarray[textarrayindex].charAt(charindex);
        charindex++
        setTimeout(type, typingdelay);
    } else {
        setTimeout(earse, newtextdelay);
    }
}


function earse() {
    if (charindex > 0) {
        textspan.textContent = textarray[textarrayindex].substring(0, charindex - 1);
        charindex--;
        setTimeout(earse, earserdelay);
    } else {
        textarrayindex++;
        if (textarrayindex >= textarray.length) textarrayindex = 0;
        setTimeout(type, typingdelay);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, newtextdelay);
})
