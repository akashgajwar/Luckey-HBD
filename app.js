var bdate = document.querySelector("#date");
var luckeyNo = document.querySelector("#number");
var btnCheck = document.querySelector("#check");
var outputDiv = document.querySelector("#output");

function clickHandler(){
    var hbd = bdate.value;
    var lno = luckeyNo.value;
    var date = [];
    var total = 0;
    for(i=0; i<9; i++){
        date[i] = hbd.substring((i), (i+1));
        // console.log(date);
    }
    for (i=0; i<9; i++){
        total= total + date[i];
    }
    console.log(total);
    console.log("your luckey no. is "+lno);
}






btnCheck.addEventListener("click", clickHandler);