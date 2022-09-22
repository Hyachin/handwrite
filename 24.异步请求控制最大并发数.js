function createTask(i) {
    return () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(i)
            }, 2000)
        })
    }
}
class TaskQueue {
    constructor() {
        this.max = 10
        this.taskList = []
        setTimeout(() => {
            this.run()
        })
    }
    addTask(task) {
        this.taskList.push(task)
    }
    run() {
        let length = this.taskList.length
        if (!length) return
        let min = Math.min(this.max, length)
        for (let i = 0; i < min; i++) {
            // 开始占用一个任务的空间
            this.max--
            let task = this.taskList.shift()
            task().then((res) => {
                console.log(res);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                // 释放一个任务空间
                this.max++
                this.run()
            })
        }
    }
}
// test
let taskQueue = new TaskQueue()
for (let i = 0; i < 20; i++) {
    let task = new createTask(i)
    taskQueue.addTask(task)
}