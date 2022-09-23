// async await 核心原理
const { readFile } = require('fs/promises')

function* read() {
    const filePath = yield readFile('./name.txt', 'utf-8')
    return readFile(filePath, 'utf-8')
}
function co(it) {
    return new Promise((resolve, reject) => {
        let next = function (data) {
            let { value, done } = it.next(data)
            if (done) {
                resolve(value)
            } else {
                Promise.resolve(value).then(res => {
                    next(res)
                })
            }
        }
        next()
    })
}
let result = co(read())
result.then((res) => {
    console.log(res);
})