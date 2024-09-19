function oddeven(){
    let num1 = parseInt(window.prompt("enter a number"));

    if(num1 % 2 === 0){
        window.alert("Number is even");
    }
    else{
        window.alert("number is odd");
    }
}

oddeven();
