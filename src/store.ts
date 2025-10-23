import { configureStore, combineReducers } from '@reduxjs/toolkit'
import todoReducer from './features/todoList'
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage'

const rootReducer = combineReducers({
    todoList: todoReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadFromLocalStorage() ?? undefined,
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
