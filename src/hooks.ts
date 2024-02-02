import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./store";


//? TypedUseSelectorHook forçar um atribuição permite criar um hook que esta de acordo com o RootState da minha aplicação
//* a partir de agora o useAppSelector entende qual o modelo da minha aplicação
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector