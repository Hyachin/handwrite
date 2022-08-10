class EventEmitter {
    constructor() {
        this.events = {}
    }
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(callback)
    }
    emit(eventName, ...args) {
        this.events[eventName].forEach((fn) => fn(...args))
    }
    once(eventName, callback) {
        const fn = (...args) => {
            callback(...args)
            this.off(eventName, fn)
        }
        this.on(eventName, fn)
    }
    off(eventName, callback) {
        if (!callback) {
            this.events[eventName] = []
        } else {
            this.events[eventName] = this.events[eventName].filter((fn) => fn != callback)
        }
    }

}
const e = new EventEmitter()
function fn1(a, b) { console.log('fn1', a, b) }
function fn2(a, b) { console.log('fn2', a, b) }
function fn3(a, b) { console.log('fn3', a, b) }
e.on('key1', fn1)
e.on('key1', fn2)
e.once('key1', fn3)
e.emit('key1', 10, 20)
e.off('key1', fn1)
e.emit('key1', 10, 20)