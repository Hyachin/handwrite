Array.prototype._map = function (fn, thisArgs) {
    if (Object.prototype.toString.call(fn) !== '[object Function]') {
        throw ('Error in params')
    }
    let res = []
    let cur = this
    for (let i = 0; i < cur.length; i++) {
        res[i] = fn.call(thisArgs, cur[i], i, cur)
    }
    return res
}
// test
let arr = [3, 4, 5, 6, 7]
console.log(arr._map((item, index, arr) => item + 1));