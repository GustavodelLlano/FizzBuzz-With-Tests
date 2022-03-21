const fizzbuzz = (num) => {
    let answer = ""
    if (num === 0) {
        return answer = 0
    } 
    if (num % 3 === 0 && num % 5 === 0) {
        return answer += "fizzbuzz"
    } 
    if (num % 3 === 0) {
        return answer += "fizz"
    } 
    if (num % 5 === 0) {
        return answer += "buzz"
    } 
    else {
        return num
    }

}

const print =(num) => {
    for(let i =0; i<= num; i++){
        console.log(`${i}: ${fizzbuzz(i)}`)
    }
}

print(100)

module.exports = fizzbuzz