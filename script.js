// function check1(){
//     let res
//      = window.confirm("do you really want to logout");

//     console.log(res);
// }

// check1();


function check2(){
    let res = window.confirm("do you really want to logout");

    if(res){
        window.location.href = "login.html";
        // alternate - window.open("login.html");
    }

    else{
        window.alert("invalid choice");
    }
}

check2();
