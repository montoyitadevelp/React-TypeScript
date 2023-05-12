
import { useReducer } from "react";

const inicialCount = {
    count: 10,
}

type ActionType = 
    | { type: 'increase' } 
    | { type: 'decrease' }
    | { type: 'custom', payload: number };
    
    


const reduxReturn = ( state: typeof inicialCount, action: ActionType) => {

    switch ( action.type) {
        case 'increase':
            return {
                ...state,
                count: state.count + 1
            }

        case 'decrease':
            return {
                ...state,
                count: state.count - 1
            }

         case 'custom':
             return {
                ...state,
                count: action.payload
            }
    
        default:
            return state;
    }

}

export const CountRex = () => {

    const [ { count}, dispatch] = useReducer(reduxReturn, inicialCount); //Función para retornar un nuevo state


  return (
    <>
        <h2>Counter: { count }</h2>
        <button className="btn btn-outline-primary" onClick={ () => dispatch({ type: 'increase'})}>
            +1
        </button>
        <button className="btn btn-outline-danger" onClick={ () => dispatch({ type: 'decrease'})}>
            -1
        </button>
        <button className="btn btn-outline-danger" onClick={ () => dispatch({ type: 'custom', payload: 100})}>
            100
        </button>
  
    </>
  )

}

