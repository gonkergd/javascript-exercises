const findTheOldest = function(people) {
    let newPeople = people.map(n => {
        if (n.yearOfDeath == undefined) return 2026 - n.yearOfBirth;
        return n.yearOfDeath - n.yearOfBirth;
    });
    return people[newPeople.findIndex(n => n == Math.max(...newPeople))];
};
const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]
console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
