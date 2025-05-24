// 

let acount = document.querySelector('.amount')
let input = document.querySelector('input')
let addBtn = document.querySelector('.add')
let deposit = document.querySelector('.deposit')

console.log(acount);



addBtn.addEventListener("click",function(){
   let  amount = Number(prompt("Enter your amout"))

    acount.innerHTML += amount
    
})