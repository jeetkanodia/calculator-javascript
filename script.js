

function add(a,b){
    return (a+b);
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operation(a,b,op){
    switch(op)
        {
        case '+': return add(a,b);break;
        case '-': return subtract(a,b);break;
        case '*': return multiply(a,b);break;
        case '/': {
            if(b!=0) {return divide(a,b);break;}
            else{return "ZEROERROR";break;}}
        default: return "ERROR";
        }
    }

    function clearDisplay(){
        document.getElementById("display").innerHTML = "";
    }

function clicked(ele){
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML+ele.getAttribute("data-type");
    }

