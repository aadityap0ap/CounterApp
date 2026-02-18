const number = document.querySelector('#number');
const decreasebtn = document.querySelector('#decrease');
const increasebtn = document.querySelector('#increase');
const resetbtn  = document.querySelector('#reset');

let count = 0;

increasebtn.addEventListener("click",function(){
    count = count + 1;
    number.innerText = count;
})

decreasebtn.addEventListener("click",function(){
    count = count - 1;
    number.innerText  = count;
})

resetbtn.addEventListener("click",function(){
    count = 0;
    number.innerText = count;
})
