const {printTable} = require('console-table-printer')

const {updateleft, updateright} = require('./update')
const {sourceinput, convinput} = require('./view')

async function app(state, update, view){
    while(true){
        const {model, currentView} = state
        const {title, table} = currentView

        //Interface
        console.clear()
        console.log(title)
        printTable(table)

        //inputs
        const source = await sourceinput(model)
        const tempconv = await convinput(source['source'], model)

        //Update
        if(source['source'] == 'left'){
            console.log("ENTRY IF ")
            const updatedModel = updateleft(tempconv['leftValue'], tempconv['leftUnit'], tempconv['rightUnit'])
            state = {
                ...state, 
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }
        else if(source['source'] == 'right'){
            console.log("ENTRY ELSE IF ")
            const updatedModel = updateright(tempconv['rightValue'], tempconv['rightUnit'], tempconv['leftUnit'])
            state = {
                ...state, 
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }
        
    }
}
module.exports = {app}