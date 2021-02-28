function calculate(a,b,operator)
{
let result;
if (operator == "+") {
    
    result = a + b
}
else if (operator == "-") {
    result = a - b
}
return result
}
let data=calculate(10,9,"+")
console.log(data)
console.log(calculate(10,9,"-"))