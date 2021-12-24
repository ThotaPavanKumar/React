
import ("./index.css");
import image from "./note-taking.png";

const div = document.createElement("div");
div.classList.add("box");

const h1 = document.createElement("h1");
h1.innerText = "Notes Taking App";
h1.classList.add("h1");

const img = document.createElement("img");
img.src = image;
img.classList.add("image");

div.append(img,h1);
div.classList.add("header");

// ============================

const div2 = document.createElement("div");
div2.classList.add("boxBottom");

let inp = document.createElement("input");
inp.classList.add("inp");

let btn = document.createElement("button");
btn.innerText = "Submit";
btn.classList.add("btn");
btn.addEventListener("click",submit);
var value = "";

function submit() {
    value = inp.value;
    console.log(value);
    inp.value = "";

    let li = document.createElement("li");
    li.innerText = value;
    li.classList.add("list");

    let div = document.createElement("div");
    div.append(li);
    div6.append(div);
}


const div3 = document.createElement("div");
div3.classList.add("left");

div3.append(inp,btn);

// ===================================
const div4 = document.createElement("div");
div4.classList.add("right");

const div5 = document.createElement("div");
div5.innerHTML = "Display";
div5.classList.add("display");
const div6 = document.createElement("div");

div4.append(div5,div6);
// ===================================

div2.append(div3,div4);
div2.classList.add("flex");


// ====================================
document.getElementById("root").append(div,div2);