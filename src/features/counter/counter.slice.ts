import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ICounter {
    value: number;
}

const initialState: ICounter = {
    value: 0
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementAmount: (state, action: PayloadAction<number>) => {
      //? PayloadAction interface que serve para definir a estrutura do payload
      state.value += action.payload;
    },
  },
});

// * exportar as actions
export const { increment, incrementAmount } = counterSlice.actions;

// * função que será usada dentro da store
export const counterReducer = counterSlice.reducer;
