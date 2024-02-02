
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counter/counter.slice";

//* configureStore será usada ao invés do 
export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

/* type GetStateType = typeof store.getState //? extrair um tipo no typescript

export type RootState = ReturnType<GetStateType> //? ReturnType extrair apenas o tipo do retorno, no caso do GetStateType, estava me retornando a função + o retorno
 */


// * refactor
export type RootState = ReturnType<typeof store.getState>