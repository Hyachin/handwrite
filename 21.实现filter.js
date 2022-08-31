Array.prototype._filter = function (fn, thisArgs) {
    if (Object.prototype.toString.call(fn) !== '[object Function]') {
        throw ('Error in params')
    }
    let res = []
    let cur = this
    for (let i = 0; i < cur.length; i++) {
        if (fn.call(thisArgs, cur[i], i, cur)) {
            res.push(cur[i])
        }
    }
    return res
}
// test
let arr = [2, 3, 4, 5, 6, 7]
// console.log(arr._filter(1));
console.log(arr._filter((item) => item > 5));