"use strict";
var isDone = true;
//----------------------------------
var decimal = 10;
var hex = 0xf00d;
var binary = 6;
var octa = 23358;
var age = 19;
// --------------------------------
var myName = "James";
var myProfile = "I'm " + myName + " , I'm " + age + " year olds.";
//---------------------------------
var list = [1, 2, 3];
var numList = [1, 2, 3, 4, 5];
// numList.forEach((n) => console.log(n));
//---------------------------------
var tuple = ["James", 2];
//---------------------------------
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Black"] = 1] = "Black";
    Color[Color["Pink"] = 2] = "Pink";
})(Color || (Color = {}));
var color = Color[1];
//---------------------------------
var notSure = 4;
// create({ name: "James" });
// create("0");
//---------------------------------
var someValue = "Hello from the other side.";
var strLength = someValue.length;
// console.log(strLength);
//---------------------------------
