// Object.create 函数返回一个对象，它的原型是传入的参数
const create = function (obj) {
    function F() { }
    F.prototype = obj
    return new F()
}
