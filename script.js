let random = Math.random() * 100

console.log(random)

let fault = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",

}

let num1 = prompt("Enter First Number : ")
let num2 = prompt("Enter Second Number : ")
let Operator = prompt("Enter the Operator : ")
console.log(`First Number ${num1} and Second Number ${num2} and the Selected operator is ${Operator}`)
console.log("The result  : ")
if(random>10){
    //Calculates correct output
    console.log(eval(`${num1} ${Operator} ${num2}`))
    alert("\n\nTrust me...🤝\n I gave you Correct answer")
}
else{
        //Calculates Wrong output
        Operator = fault[Operator]
        console.log(eval(`${num1} ${Operator} ${num2}`))
        alert("\n\nHehe...😂 \n I gave you Wrong answer")
}