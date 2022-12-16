const calculator = require("./first.js")
const {add , subtract} = require("./first.js")

function calculation(num1 , num2){
    num3 = add(num1 , num2);
    console.log(num3);
}

calculation(12 , 29);