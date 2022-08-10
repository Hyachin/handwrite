function myInstanceOf(instance, origin) {
    if (instance == null) return false
    if (typeof instance !== 'object' && typeof instance !== 'function') {
        return false
    }
    let tempInstance = instance
    while (tempInstance) {
        if (tempInstance.__proto__ === origin.prototype) {
            return true
        }
        tempInstance = tempInstance.__proto__
    }
    return false
}
console.log(myInstanceOf([], Array));
console.log(myInstanceOf({}, Array));