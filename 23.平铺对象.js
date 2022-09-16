function flatObj(obj, preKey = '', result = {}) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            let newKey = `${preKey}${key}`
            if (typeof obj[key] === 'object') {
                flatObj(obj[key], `${newKey}.`, result)
            } else {
                result[newKey] = obj[key]
            }
        }
    }
    return result
}
// test
const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: {
                g: 4
            }
        },
        h: {
            i: 5
        }
    }
}
// 输出 { a: 1, 'b.c': 2, 'b.d.e': 3, 'b.d.f.g': 4, 'b.h.i': 5 }
console.log(flatObj(obj));