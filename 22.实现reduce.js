Array.prototype._reduce = function (fn, initVal) {
    if (Object.prototype.toString.call(fn) !== "[object Function]") {
        throw ('Error in params')
    }
    let cur = this;
    let count = initVal || 0;
    for (let i = 0; i < cur.length; i++) {
        count = fn(count, cur[i]);
    }
    return count;
};
// console.log([1, 2, 3]._reduce(1));
console.log([1, 2, 3]._reduce((left, right) => left + right));