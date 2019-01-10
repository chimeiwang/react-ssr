import { combineReducers } from "redux";
import {type} from "./action";

const initialState = {
    list:[],
}

const dosomethingreducer =  (state=initialState, action) =>{
    switch (action.type){
        case type.DOSOMETHING:
            return{
                list:action.value
            }
        default: return state;
    }
}
const reducer = combineReducers({
    dosomethingreducer,
});
export default reducer