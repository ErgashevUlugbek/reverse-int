module.exports = function reverse (n) {
    let abc=Math.abs(n);
    let a=abc.toString().split('').reverse().join('');
    return Number(a); 
}
