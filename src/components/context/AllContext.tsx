import { createContext } from "react";
import { AllState } from "../interfaces/interfaces";

export type AllContextProps = {
    allState: AllState;
    toggleAll: ( id: string ) => void;
}


export const AllContext = createContext<AllContextProps>({} as AllContextProps); // Crear un proveedor de información para compartir en sus componentes hijos, además de que allcontextprops es generico