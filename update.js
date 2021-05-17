function convert(tempconv, tempUnit1, tempUnit2){
    if(tempUnit1 == 'Fahrenheit'){
        //Fahrenheit To ...
        if(tempUnit2 == 'Celsius') {return (tempconv-32)*5/9}
        else if(tempUnit2 == 'Kelvin') {return (tempconv-32)*5/9 + 273.15}
        else {return tempconv}
    }
    else if(tempUnit1 == 'Celsius'){
        //Celsius To ...
        if(tempUnit2 == 'Fahrenheit') {return (tempconv*9/5)+32}
        else if(tempUnit2 == 'Kelvin') {return tempconv + 273.15}
        else {return tempconv}
    }
    else if(tempUnit1 == 'Kelvin'){
        //Kelvin To ...
        if(tempUnit2 == 'Fahrenheit') {return (tempconv*9 - 273.15)*9/5 + 32}
        else if(tempUnit2 == 'Celsius') {return tempconv - 273.15}
        else {return tempconv}
    }
}


function updateleft(tempconv, tempUnit1, tempUnit2, model){
    return{
        ...model,
        leftValue: Number(tempconv),
        leftUnit: tempUnit1,
        rightValue: Number(convert(tempconv, tempUnit1, tempUnit2)),
        rightUnit: tempUnit2
    }
}
function updateright(tempconv, tempUnit1, tempUnit2, model){
    return{
        ...model,
        leftValue: Number(convert(tempconv, tempUnit1, tempUnit2)),
        leftUnit: tempUnit2,
        rightValue: Number(tempconv),
        rightUnit: tempUnit1
    }
}
module.exports = {updateleft, updateright, convert}