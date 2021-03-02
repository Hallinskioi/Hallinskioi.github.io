// JavaScript source code


function imageHighlight() {
    document.getElementById("img1").style.zIndex = 3;
    document.getElementById("img2").style.zIndex = 2;
    document.getElementById("img3").style.zIndex = 1;
}

function imageHighlight2() {
    document.getElementById("img1").style.zIndex = 2;
    document.getElementById("img2").style.zIndex = 3;
    document.getElementById("img3").style.zIndex = 1;
}

function imageHighlight3() {
    document.getElementById("img1").style.zIndex = 1;
    document.getElementById("img2").style.zIndex = 2;
    document.getElementById("img3").style.zIndex = 3;
}

function imageUnhighlight() {
    document.getElementById("img1").style.zIndex = 1;
    document.getElementById("img2").style.zIndex = 2;
    document.getElementById("img3").style.zIndex = 3;
}