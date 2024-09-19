 function threenumber(){
    let num1 =parseInt(window.prompt("Enter number one"));
    let num2 =parseInt(window.prompt("Enter number two"));
    let num3 =parseInt(window.prompt("Enter number three"));

    if(num1>num2 && num1>num3){
        window.alert("NUmber one is greater");
    }
    else if(num2>num1 && num2>num3){
        window.alert("Number two is greater");
    }
    else{
        window.alert("Number three is greater");
    }
 }

 threenumber();