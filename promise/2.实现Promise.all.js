Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let count = 0
        let arr = []
        for (let i = 0; i < promises.length; i++) {
            promises[i].then((value) => {
                count++
                arr[i] = value
                if (count == promises.length) {
                    resolve(arr)
                }
            }, (reason) => {
                reject(reason)
            })
        }
    })
}