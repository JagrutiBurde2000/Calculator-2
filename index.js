function performOperation(){
    console.log("hi")
    const num1=document.getElementById("num1").value;
    const num2=document.getElementById("num2").value;
  
    const operator=document.getElementById("operator").value;
    const result=document.getElementById("result");

    if(isNaN(num1)|| isNaN(num2)){
        result.innerText="please enter a  valid number"
    }
    if(operator===""){
        result.innerText="please enter a operator"
    }
    const result1=calculate(parseFloat(num1),parseFloat(num2),operator)
     result.value=result1; 
}

function calculate(num1, num2, operator){
 if(operator=="+"){
    return num1+num2
 }
else if(operator=="-"){
    return num1-num2
 }
else if(operator=="*"){
    return num1*num2
 }
else if(operator=="/"){
    return num1/num2
 }
 else{
    return null;
 }
}