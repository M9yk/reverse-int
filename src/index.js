module.exports = function reverse(n) {
    let strN = Math.abs(n).toString();
    let str = "";
    let i = strN.length - 1;
    while (i >= 0) {
        str = `${str}${strN[i]}`;
        i -= 1;
    }
    return +str;
};
