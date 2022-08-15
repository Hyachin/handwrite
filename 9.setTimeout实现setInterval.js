function mySetInterval(fn, wait) {
    setTimeout(() => {
        fn()
        mySetInterval(fn, wait)
    }, wait)
}
mySetInterval(() => {
    console.log('打印');
}, 1000)