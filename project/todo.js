
input = document.querySelector("input")
list = document.querySelector("ul")
button = document.getElementById("button")

// input.addEventListener("change",(e)=>{
//     console.log(e.target.value);
    
    
// })

button.addEventListener("click",function(){
    
    input.addEventListener("change",(e)=>{
        console.log(e.target.value);
        
        
    })
    alert('hello')
})