var num1="";
var num2="";
var operator="";

function ans(n1,n2,op){
    if (op==="+"){return parseFloat(n1)+parseFloat(n2);}
    else if (op==="-"){return parseFloat(n1)-parseFloat(n2);}
    else if (op==="*"){return parseFloat(n1)*parseFloat(n2);}
    else if (op==="/"){return parseFloat(n1)/parseFloat(n2);}
}

function updateDisplay(value) {
    document.querySelector("h1").innerHTML = value;
}

document.querySelectorAll(".number").forEach(function(button){
    button.addEventListener("click",updateNumber);
})

function updateNumber(event){
    if (operator===""){num1+=event.target.textContent;
        updateDisplay(num1);}
    else{num2+=event.target.textContent;
        updateDisplay(num2);}
}

document.querySelectorAll(".operator").forEach(function(button){
    button.addEventListener("click",updateOperator);
})

function updateOperator(event){operator+=event.target.textContent;
    updateDisplay(operator);}

document.querySelector(".equal").addEventListener("click",show);

function show(){document.querySelector("h1").innerHTML=ans(num1,num2,operator);}
