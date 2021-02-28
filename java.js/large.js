let i=100;let j=50;let k=30
if(i >= j && i >= k) {
    console.log("largest = i")
}
else if (j >= i && j >= k) {
    console.log("largest = j")
}
else {
    console.log("largest = k")
}
console.log("after if else block")
let choice="+"
switch(choice){
    case "+":{
        console.log(i+j)
        break
    }
    case "-":{
        console.log(i-j)
        break
    }
    default:
        console.log("invalid operation...")
}