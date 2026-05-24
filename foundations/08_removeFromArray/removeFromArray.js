const removeFromArray = function(...args) {
    array = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        num = arguments[i];
        while (array.includes(num)){
            array.splice(array.indexOf(num), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
