
// welcome to the counter project

// document 
let button = document.querySelectorAll('button')
let counter = document.querySelector(".count")


let count = 0

let buttonArry = Array.from(button)

buttonArry.map((item)=>{
    
    item.addEventListener('click',()=>{
        if (item.className == 'incress'){
            count ++
            counter.innerText = count
        }
        else if (item.className == 'decress') {
            count --
            counter.innerText = count
            
        }
        else{
            count = 0
            counter.innerText = count
            
        }
    })
})

