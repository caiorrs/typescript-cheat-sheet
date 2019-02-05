function getSum(num1, num2) {
    return num1 + num2;
}
// console.log(getSum(2, 3));
var mySum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
// console.log(mySum(3,5));
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + ' ' + lastName;
} // lastname é opcional por causa do '?'
console.log(getName('John', 'Doe'));
function myVoid() {
}
