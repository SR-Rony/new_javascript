
let input = document.querySelector("input")
let list = document.querySelector("ul")
let add = document.getElementById("add")
let update = document.getElementById("update")

let updateId = ''

let todoarray = []

add.addEventListener("click",function(){
    
    let inputValue = input.value
    todoarray.push(inputValue)
    input.value = ""
    todoFun()
    
})



function todoFun(){
    list.innerHTML = ""
     todoarray.map((todo,index)=>{
        list.innerHTML += `<li>${todo} <button class="delete">Delete</button> <button class="edit">Edit</button></li>`

        // delete button
        let delButton = document.querySelectorAll(".delete")

        let deleteArray = Array.from(delButton)
            
        deleteArray.map((item,index)=>{
                
            item.addEventListener('click',function(){
                todoarray.splice(index,1)
                todoFun()
                
            })  
        })

        // delete button
        let editButton = document.querySelectorAll(".edit")

        let editArray = Array.from(editButton)
            
        editArray.map((item,index)=>{
                
            item.addEventListener('click',function(){
                
                input.value = todoarray[index]
                updateId = index
                console.log(updateId);
                
                
            })  
        })
      


        
        
    })
}

// update button
update.addEventListener("click",function(){
    todoarray[updateId] = input.value
    input.value = ""
    todoFun()
})