const repeatString = function repeatString(string, num) {
    if (num < 0) return "ERROR";
    let next = "";
    for (let i = 0; i < num; i++){
        next += string;
    }
    return next;
};

// Do not edit below this line
module.exports = repeatString;
