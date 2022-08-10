function Animal(name) {
    this.name = name
}
function myNew(Fn, ...args) {
    let obj = {}
    obj.__proto__ = Fn.prototype
    let res = Fn.apply(obj, args)
    return res instanceof Object ? res : obj
}
let a = myNew(Animal, 'cat')
console.log(a);