Function.prototype.customBind = function (context, ...args) {
    return (...newArgs) => {
        return this.apply(context, args.concat(newArgs))
    }
}
const test = {
    name: "hyachin",
    showAge: function (age) {
        console.log(this.name + " is " + age + " years old");
    },
};
test.showAge(18);
test.showAge.bind({ name: "zhangsan" })(18);
test.showAge.customBind({ name: "zhangsan" })(18);