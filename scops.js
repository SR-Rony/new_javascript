// Welcome to javascript scops

let a = 10;

function outer (){
    let b = 20;
    console.log(a,b,);
    function inner (){
        let c = 30
        console.log(a,b,c);
        
    }
    inner()
}
outer()