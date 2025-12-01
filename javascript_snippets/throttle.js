// throttle project

function throttle(func, limit) {
  let lastFunc = 0;
    return function(...args) { 
        const now = Date.now();
        if (now - lastFunc >= limit) {
            lastFunc = now;
            func.apply(this, args);
        }
     }
}

document.addEventListener('scroll', throttle(function() {
    console.log('Scroll event handler called!');
}, 2000));