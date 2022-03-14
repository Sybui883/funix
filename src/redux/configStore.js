import { combineReducers, createStore } from "redux"
import StafflistReducer from './reducers/StafflistReducer'



const rootReducer = combineReducers({
    StafflistReducer,
})

const store = createStore(rootReducer)

export default store;