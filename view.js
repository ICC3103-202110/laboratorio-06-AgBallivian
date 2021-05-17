const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
function temptitle(){
    return chalk.blue(
        figlet.textSync('Unit Converter App', 
            {
            horizontalLayout: 'full', font: 'colossal'
            }
        )
    )
}
function temptable(model){
    const {leftValue} = model 
    const {leftUnit} = model
    const {rightValue} = model
    const {rightUnit} = model
    return [
        {
            'left Value': `${leftValue}`,
            'left Unit': `${leftUnit}`,
            'right Value': `${rightValue}`,
            'right Unit': `${rightUnit}`
        }
    ]
}
function sourceinput(model){
    const {source} = model
    message = 'Select source: '
    const choices = ['right', 'left']
    return inquirer.prompt([ 
        { 
            name: 'source',
            type: 'list',
            message: message,
            default: source,
            choices: choices
        }
    ])
}
function convinput(source, model){
    const {leftValue} = model 
    const {leftUnit} = model
    const {rightValue} = model
    const {rightUnit} = model
    const messageTemp = 'Temperature value to convert?'
    const messageFrom = 'From?'
    const messageTo = 'To?'
    const choices = ['Celsius', 'Fahrenheit', 'Kelvin']

    
    //if source left convert left to right
    if(source == 'left'){
        return inquirer.prompt([
            {
                name: 'leftValue',
                type: 'input',
                message: messageTemp,
                default: leftValue
            },
            {
                name: 'leftUnit',
                type: 'list',
                message: messageFrom,
                default: leftUnit,
                choices: choices
            },
            {
                name: 'rightUnit',
                type: 'list',
                message: messageTo,
                default: rightUnit,
                choices: choices
            }
        ])
    }
    //if source right convert right to left
    else if(source == 'right'){
        return inquirer.prompt([
            {
                name: 'rightValue',
                type: 'input',
                message: messageTemp,
                default: rightValue
            },
            {
                name: 'rightUnit',
                type: 'list',
                message: messageFrom,
                default: rightUnit,
                choices: choices
            },
            {
                name: 'leftUnit',
                type: 'list',
                message: messageTo,
                default: leftUnit,
                choices: choices
            }
        ])
    }

}
function view(model){
    return{
        title: temptitle(),
        table: temptable(model),
    }
}
module.exports = {view, sourceinput, convinput}