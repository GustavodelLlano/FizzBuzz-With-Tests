
const fizzbuzz = require("./fizzbuzz")

describe("fizzbuzz", ()=> {
    test(" print 1 if received 1", ()=>{
        const expected = 1
        const result = fizzbuzz(1)
        expect(expected).toBe(result)
    })

    test("print fizz modulo 3", ()=> {
        const expected = "fizz"
        const result = fizzbuzz(3,6,9)
        expect(expected).toBe(result)
    })

    test ("print buzz modulo 5", ()=> {
        const expected = "buzz"
        const result = fizzbuzz(5,10,15)
        expect(expected).toBe(result)
    })

    test ("print buzz modulo 15", ()=> {
        const expected = "fizzbuzz"
        const result = fizzbuzz(15,30,45)
        expect(expected).toBe(result)
    })
})
