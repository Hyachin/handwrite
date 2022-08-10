Function.prototype.customBind = function (context, ...args) {
    return (...newArgs) => {
        this.apply(context, [...args, ...newArgs])
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