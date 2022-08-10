function Promise(executor) {
    this.PromiseState = 'pending'
    this.PromiseResult = null
    const resolve = (data) => {
        if (this.PromiseState !== 'pending') return
        this.PromiseState = 'fulfilled'
        this.PromiseResult = data
    }
    const reject = (data) => {
        if (this.PromiseState !== 'pending') return
        this.PromiseState = 'rejected'
        this.PromiseResult = data
    }
    try {
        executor(resolve, reject)
    } catch (error) {
        reject(error)
    }
}
Promise.prototype.then = function (onResolved, onRejected) {
    if (this.PromiseState === 'fulfilled') {
        onResolved(this.PromiseResult)
    } else {
        onRejected(this.PromiseResult)
    }
}