//javascript snippet/debounce.js

function debounce(func, delay) {

    console.log("In Debounce ...");
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }
    

}


const serrch = debounce((q) => {
    console.log("Debounced Function Executed",q);
}, 2000);


serrch("Hello");
serrch("Hello W");
serrch("Hello Wo"); 
serrch("Hello Wor"); 
serrch("Hello World"); 