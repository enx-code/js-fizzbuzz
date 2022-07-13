// TODO: Write your function in this file


function accepTwoNum(lowNum, upNum) {
    const arr = []
    for (let i = lowNum; i <= upNum; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push("FizzBuzz")
        } else if (i % 3 === 0) {
            arr.push("Fizz")
        } else if (i % 5 === 0) {
            arr.push("Buzz")
        } else {
            arr.push(i)
        }
    
    }
    return arr
}
console.log(accepTwoNum(1, 2))
console.log(accepTwoNum(1, 3))
console.log(accepTwoNum(9, 12))
console.log(accepTwoNum(4, 6))
console.log(accepTwoNum(13, 15))
console.log(accepTwoNum(51, 54))


// TODO: Change undefined below to the name of your function
module.exports = accepTwoNum
