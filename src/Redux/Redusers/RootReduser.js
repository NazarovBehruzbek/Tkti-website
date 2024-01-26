import { combineReducers } from "redux";
import {langReducer} from "./LangReduser";


export const rootReducer = combineReducers({
        changeLang:langReducer,
    }
)
