function convert()
{
    const inputValue=parseFloat(document.getElementById("inputValue").value);
    const fromTemp=document.getElementById("fromTemp").value;
    const toTemp=document.getElementById("toTemp").value;
    let result;
    if(fromTemp==="CELSIUS" && toTemp==="FAHRENHIET")
    {
        result=inputValue*(9/5)+32;
    }
    else if(fromTemp==="FAHRENHIET" && toTemp==="CELSIUS")
    {
        result=(5/9)*(inputValue-32);
    }
    else if(fromTemp==="CELSIUS" && toTemp==="KELVIN")
    {
        result=inputValue+273.15;
    }
    else if(fromTemp==="KELVIN" && toTemp==="CELSIUS")
    {
        result=inputValue-273.15;
    }
    else if(fromTemp==="FAHRENHIET" && toTemp==="KELVIN")
    {
        result=(inputValue-32)*5/9 +273.15;
    }
    else if(fromTemp==="KELVIN" && toTemp==="FAHRENHIET")
    {
        result=(inputValue-273.15)*9/5 +32;
    }
    else{
        result="Invalid conversion";
    }
    if(!isNaN(result)){
        document.getElementById("result").textContent=result.toFixed(2);
    }
    else{
        document.getElementById("result").textContent=result;
    }
}