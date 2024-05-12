//base para tudo
import { applyMiddleware } from "redux"//createStore

import { configureStore } from "@reduxjs/toolkit"
//applyMiddleware nao necessário
import logger from "redux-logger" //nao necessário

import rootReducer from "./root-reducer"

//const store = createStore(rootReducer, applyMiddleware(logger)) // nao necessario  applyMiddleware(logger)

const store = configureStore({
    reducer: rootReducer,
    applyMiddleware: [logger],
})

export default store
