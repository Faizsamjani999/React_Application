import {legacy_createStore} from "redux"
import { CounterReducer } from "../Counter/CounterReducer"

export const store = legacy_createStore(CounterReducer)