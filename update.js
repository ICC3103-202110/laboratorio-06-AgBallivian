function updateleft(tempconv, tempUnit1, tempUnit2, model){
    //const {source} = model

    //Here put functions that convert stuff
    const newTemp = Number(tempconv*2) //Test
    return{
        ...model,
        leftValue: tempconv,
        leftUnit: tempUnit1,
        rightValue: newTemp,
        rightUnit: tempUnit2
    }
}
function updateright(tempconv, tempUnit1, tempUnit2, model){
    //const {source} = model

    //Here put functions that convert stuff
    const newTemp = Number(tempconv*2) //Test
    return{
        ...model,
        leftValue: newTemp,
        leftUnit: tempUnit2,
        rightValue: tempconv,
        rightUnit: tempUnit1
    }
}
module.exports = {updateleft, updateright}