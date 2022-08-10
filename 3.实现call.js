Function.prototype.customCall = function (context, ...args) {
    if (context === null || context === undefined) context = globalThis
    if (typeof context !== 'object') {
        context = new Object(context)
    }
    let fnKey = Symbol()
    context[fnKey] = this
    let res = context[fnKey](...args)
    delete context[fnKey]
    return res
}
function run(miles, minutes) {
    console.log(`${this.name} run ${miles} miles ${minutes} minutes`);
}
run.call({ name: "Hyachin" }, 3, 20)