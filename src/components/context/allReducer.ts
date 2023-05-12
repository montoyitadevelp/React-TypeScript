import { all } from "axios";
import { All, AllState } from "../interfaces/interfaces";

type AllAction = 
| { type: 'addAll', payload: All }
| { type: 'toggleAll', payload: {id: string} };

export const allReducer = ( state: AllState, action: AllAction ) => {
    

    
    switch ( action.type ) {
        case 'addAll':
            return {
                ...state,
                alls: [ ...state.alls, action.payload ]
            }

        case 'toggleAll':
            return {
                ...state,
                alls: state.alls.map( ({...all}) => {
                    if( all.id === action.payload.id) {
                        all.completed = !all.completed;
                    }
                    return all;
                })
            }

            
            
    
        default:
            return state;
            
    }
}