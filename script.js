function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operation(a, b, op) {
    switch (op) {
        case '+': return add(a, b);console.log(add(a,b)); break;
        case '-': return subtract(a, b); break;
        case '*': return multiply(a, b); break;
        case '/': {
            if (b != 0) { return divide(a, b); break; }
            else { return "ZEROERROR"; break; }
        }
        default: return "ERROR";
    }
}

function clearDisplay() {
    document.getElementById("display").innerHTML = "";
}

function clicked(ele) {
    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + ele.getAttribute("data-type");
}

function singleOperate(ip){
    
    
    for(let i=0;i<ip.length;i++)
    {
        if(["+","-","/","*"].includes(ip.charAt(i)))
        {
            var num_str = ip.slice(0,i);
            var op = ip.charAt(i);
            var num2_str = ip.slice(i+1);
            console.log(num_str+" "+op+" "+num2_str);
        }
    }

    var num1 = parseInt(num_str);
    var num2 = parseInt(num2_str);
    console.log(op+" "+num1+" "+num2 +" check");
    var ans = operation(num1, num2, op);
            
    if(ans!="ERROR" && ans!="ZEROERROR")
    {
        //document.getElementById("display").innerHTML=ans;
    }
    return ans;
}

function operate(){
    var ip = document.getElementById("display").innerText;
    var count=0;
    var len = ip.length;
    var j=0;
    for(let i=0;i<len;i++)
    {
        if(["+","-","/","*"].includes(ip.charAt(i)))
        {
            count++;
        }
        if(count==2)
        {
            console.log("WORKS!")
            var ans = singleOperate(ip.slice(j,i));
            count=0;
            j=i+1;
            ip = ans+ip.slice(i);
            document.getElementById("display").innerText = ip;
        }
        if(ip.length==3)
        {
            var ans = singleOperate(ip);
            
            document.getElementById("display").innerText = ans;
        }
    }
}
    
    
