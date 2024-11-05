
let random = Math.random() * 10

// console.log(random)

let fault = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}


function clicked(){
    let num1 = document.querySelector('#inputEmail4').value;
    let num2 = document.querySelector('#inputPassword4').value;
    let Operator = document.querySelector('#inputAddress').value;
    let answer = "";
    let resultText="";
    let state = true;
    if(random>7.2){
        //Calculates correct output
        answer = eval(`${num1} ${Operator} ${num2}`);
        resultText = "Trust me...&#129309;\n I gave you Correct answer";
    }
    else{
            //Calculates Wrong output
            Operator = fault[Operator];
            answer = eval(`${num1} ${Operator} ${num2}`);
            resultText = "Hehe...&#128514; \n I gave you Wrong answer";
            state = false;
    }


// console.log(random);
    var newAnsHTML =`
        <h2>Result : ${answer}</h2>
    `
    document.querySelector('.answer').innerHTML = newAnsHTML;

    var newMsgHTML =`
        <h6><b>Message</b> : ${resultText}</h6>
    `
    var msgElemet = document.querySelector('p');
    if(!state){
        msgElemet.classList.add("msgFalse");
    }
    document.querySelector('p').innerHTML = newMsgHTML;
}
