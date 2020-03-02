module.exports = function reverse(n) {
    let absolute = Math.abs(n);
    let reversed = String(absolute).split("").reverse().join("");
    return Number(reversed);
}
