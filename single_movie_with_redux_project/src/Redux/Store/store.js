import { legacy_createStore } from "redux" 
import { movieReducer } from "../Reducer/movieReducer";

export const store = legacy_createStore(movieReducer);