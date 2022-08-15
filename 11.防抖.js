function debounce(fn, wait = 200) {
    let timeout = null
    return function () {
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this, arguments)
        }, wait)
    }
}
