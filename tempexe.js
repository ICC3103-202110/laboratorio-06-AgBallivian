const {initModel} = require('./model')
const {updateleft, updateright} = require('./update')
const {view} = require('./view')
const {app} = require('./app')

const state = {
    model: initModel,
    currentView: view(initModel)
}

app(state, updateleft, updateright, view)