// module.exports = function reverse (n) {
//     if (n === 0) return 0;
//     if (n < 0) n = n * (-1);
//     let arr = [];
//     while (n > 1) {
//         arr.push(n % 10);
//         n = Math.trunc(n / 10);
//     }
//     if (Math.sign(n) === -1) {
//         return -arr.join('');
//     }
//     return parseInt(arr.join(''));
// }
module.exports = function reverse (n) {
    if (n === 0) return 0;
    if (n < 0) n = n * (-1);
    return parseInt(n.toString(10).split("").reverse().join(""), 10);
}
