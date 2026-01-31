//operators

//arithmetic operators +.-.*.%

const num1 = 10;
const num2 = 4;


const sum = num1 + num2;
const difference = num1 - num2;
const division = num1 / num2;
const multiplication = num1 * num2;
const modulus = num1 % num2;
const exponent = num1 ** num2 ;


console.log("this is the result of the sum between " + num1 +"and" + num2 + ":",sum);
 console.log("difference:" , difference);
 console.log("division:" , division);
 console.log("multiplication:" , multiplication);
 console.log("modulus:", modulus);
 console.log("exponent:", exponent);


//equality operators ==,===,!=,!==
const name1 = "gabriele";
const name2 = "sessy";

const namesAreEqual = name1 === name2
console.log("are names equal?", namesAreEqual);

const numbersAreEqual = num2 == "5" ;
console.log("numbers are equal?;", numbersAreEqual);

const numbersAreEqualStrict = num2 === "5" ;
console.log("numbers are strictly equal?;", numbersAreEqualStrict);

const numbersNotEqual = num1 !== num2
console.log("numbers are not equal?", numbersNotEqual);

//comparison operator <,>,<=,>=

const num1IsBiggerThanNum2 = num1 > num2
console.log("num1 > num2", num1IsBiggerThanNum2);

const num2IsBiggerThanNum1 = num2 > num1
console.log("num2 > num1", num2IsBiggerThanNum1);

const num2IsBiggerOrEqual5 = num2 >= 5;
console.log("num2 >= 5", num2IsBiggerOrEqual5);

//logical operators: &&,||, !

//&&-returns true when every comparison has given true
//||-returns true when at leats one comparison has given true
// !- inverts the boolean value to its opposite

const comparison1 = numbersNotEqual && num1IsBiggerThanNum2  && num2IsBiggerOrEqual5
//                      true        &&       true            &&         true        => true                             
console.log("first comparison",comparison1);

const comparison2 = numbersNotEqual && num2IsBiggerThanNum1  && num2IsBiggerOrEqual5
//                       true       &&       false           &&         true        =>false

console.log("second comparison",comparison2);

const comparison3 = numbersNotEqual || num2IsBiggerThanNum1  || numbersAreEqualStrict
//                       true       ||      false            ||        false       =>true

console.log("third comparison",comparison3);

const age = 19;
const candidateName= "Roberto"

const youCanEnter = age >= 18 && name1 === "Antonio";
console.log(youCanEnter);

const nameThatILike = candidateName === "stefano" || candidateName === "Antonio" || candidateName === "Valerio" || candidateName === "Sam";
console.log("is name valid", nameThatILike);

console.log("Do i loike the name:", !nameThatILike)







