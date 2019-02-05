let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

// let strArray: string[];
// let numArray: number[];
// let boolArray: boolean[];

let strArray: Array<string>;
let numArray: Array<number>;
let boolArray: Array<boolean>;

let strNumTuple: [string, number];

myString = 'Hello'.slice(0,3);
myNum = 22;
myBool = true;
myVar = true;

strArray = ['Hello', 'World'];
numArray = [1,2,3];
boolArray = [true, false, false];

strNumTuple = ['hello', 3];

//strNumTuple = ['hello', 3, 4, 5, 'a']; // tambem funciona, só valida os 2 primeiros valores

//let myVoid: void;
let myNull: null; // pode ser null ou undefined
let myUndefined: undefined; // pode ser null ou undefined

//myVoid = null; // pode ser undefined também

console.log(strNumTuple);