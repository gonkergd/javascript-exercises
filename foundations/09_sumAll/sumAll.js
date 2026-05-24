const sumAll = function(a, b) {
    if (typeof a != 'number' || typeof b != 'number' 
        || a % 1 != 0 || b % 1 != 0
        || a < 0 || b < 0) return "ERROR";
    let hi = 0;
    if (a < b){
        for (let i = a; i <= b; i++){
            hi += i;
        }
    } else {
        for (let i = b; i <= a; i++){
            hi += i;
        }
    }
    return hi;
};

// Do not edit below this line
module.exports = sumAll;
