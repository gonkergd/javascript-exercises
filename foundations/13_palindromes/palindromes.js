const palindromes = function (a) {
    let b = a.replace(/[^a-zA-Z0-9]/g, "");
    return b == b.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
