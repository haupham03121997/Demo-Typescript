"use strict";
//Bởi vì browser không thể run được code typescript
// Ta cần complie để chuyển đổi code typescript thành javascript
// Window + Linux: Ctrl + Shift + B
// MacOS : Command + Shift + B
console.log("Hello TypeScript");
// -------------1.Typed------------
//  Number
let a = 5;
let myNumber = 10; // myNumber = '1' => error :Type 'string' is not assignable to type 'number'.
let myString = "Hello";
myString = "Xin Chào";
// myString = { name :'A' , age :10}; // error :Type '{ name: string; age: number; }' is not assignable to type 'string'.
// => Tương tự cho type boolean
let n = null; // Không có ý nghĩa, nhưng sẽ có ý nghĩa vào 1 vài  trường hợp khác
let u = undefined; // Không có ý nghĩa,  nhưng sẽ có ý nghĩa vào 1 vài  trường hợp khác
let myArrayString; // Kiểu dữ liệu mảng string
myArrayString = ['A', 'B', 'C'];
// Kiểu dữ liệu tuple
let tuple;
tuple = ['A', 1]; // work
// tuple = ['A',1,true]; // error :Type 'true' is not assignable to type 'number'.
// -------------2.Enum------------
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "green"; // readonly,thuộc tính chỉ được được và không thay đổi được, chỉ thay đổi trực tiếp trên code
})(Color || (Color = {}));
;
console.log(Color.Red);
// -------------3.Void------------
// Void không có giá trị, chỉ có thể dùng khi không có giá trị đặt trả về
function myVoid() {
    console.log("Hello");
}
// function (...param , ...paramTypes) : ReturnType
function mySum(a, b) {
    return a + b;
}
mySum(1, 2); // work
const student = {
    name: 'A',
    age: 10,
    isMale: true,
};
const student2 = {
    name: 'Hậu Interface',
    age: 10,
    isMale: true,
};
// -------------5. Union Types------------
let myUnion;
myUnion = 1;
myUnion = 'A';
function myUnionType(a) {
    return a;
}
myUnionType(1); // work
myUnionType('A'); // work
// myUnionType(true); // error :Type 'boolean' is not assignable to type 'number | string'.
let result = null;
