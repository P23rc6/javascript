function vowelsToNumber(str) {
    return str.replace(/[a,e,i,o,u]/gi, (v, offset) => offset + 1)
}
console.log(vowelsToNumber('Hello'))