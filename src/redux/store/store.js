import { legacy_createStore as createStore, combineReducers} from 'redux'
import {expenseReducer} from "../reducers/expenses"
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    expenses: expenseReducer
})           

const initialState = {}
const store = createStore(reducer, composeWithDevTools())

export default store;