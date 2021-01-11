var bdate = document.querySelector("#date");
var luckeyNo = document.querySelector("#number");
var btnCheck = document.querySelector("#check");
var outputDiv = document.querySelector("#output");

function clickHandler(){
    var hbd = bdate.value;
    var lno = luckeyNo.value;
    var date = [];
    var total = 0;
    var per = 0;
    var sum = 0;

    for(i=0; i<8; i++){
        per = parseInt(hbd.substring((i), (i+1)));
        sum = sum + per;   
    }

    if(sum % lno ===0 ){
        var result = "you are born on a luckey day";
    }else{
        var result = "You are not born on a luckey day";
    }

    outputDiv.innerText = result;
}






btnCheck.addEventListener("click", clickHandler);