// Bài 1:
let div1 = document.getElementById("exercise1");
let btn1 = document.getElementById("btn1");
btn1.onclick = function (){
    if (div1.style.display !== "none"){
        div1.style.display = "none";
    } else {
        div1.style.display = "block"
    }
}

// Bài 2:
let div2 = document.getElementById("exercise2");
let btn2 = document.getElementById("btn2");
// let randomColor =Math.floor(math.random()*16777215).toString(16);
// btn2.onclick=function () {
//     box2. style. backgroundColor = "#" + randomColor;
// }
// rgb r,g,b đều chạy từ 0-225
btn2.onclick=function () {
    let r =Math.floor(Math.random()*256);
    let g =Math.floor(Math.random()*256);
    let b =Math.floor(Math.random()*256);//0-0.99999 *256
    // console.log(r);
    let color =`rgb(${r},${g},${b})`;
    div2.style.backgroundColor=color
}

// Bài 3
let div3 = document.getElementById("exercise3");
let div4 = document.getElementById("exercise4");
let btn3 = document.getElementById("btn3");
btn3.onclick=function () {
    let temp = div3.innerText;
    div3.innerText=div4.innerText;
    div4.innerText = temp;
    let style = getComputedStyle(div3);
    let style2= getComputedStyle(div4);
       
    let temp2=style.backgroundColor;
    div3.style.backgroundColor=style2.backgroundColor;
    div4.style.backgroundColor=temp2;
}

// Bài 4: 
let div5 = document.getElementById("exercise5");
let btn5 = document.getElementById("btn4");
let c =0
btn4.onclick=function () {
    c+=1;
    div5.style.fontSize=`${14+c}px`;
}

// Bài 5:
let div6 = document.getElementById("exercise6");
let btn6 = document.getElementById("btn5");
btn6.onclick=function () {
    if (div6.style.borderRadius !=="50%") {
        div6.style.borderRadius="50%"
    } else 
        div6.style.borderRadius="0%"
}
