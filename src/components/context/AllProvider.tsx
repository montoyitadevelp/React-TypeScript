import { Children, useReducer } from "react"
import { AllContext } from "./AllContext"
import { AllState } from "../interfaces/interfaces"
import { allReducer } from "./allReducer"

const INITIAL_STATE: AllState = {
  allCount: 2,
  alls: [
    {
      id: '1',
      desc: 'Throw the garbage',
      completed: false
    },
    {
      id: '2',
      desc: 'Throw the rocks',
      completed: false
    }

  ],
  completed: 0,
  pending: 2
} // Ctrl + . y add properties para autocompletado



interface props {
    children: JSX.Element | JSX.Element[]
}

export const AllProvider = ({ children }: props) => {

  const toggleAll = ( id: string ) => {
    dispatch({ type: 'toggleAll', payload: { id }})
  }

  const [allState, dispatch] = useReducer(allReducer, INITIAL_STATE);

  return (
    <AllContext.Provider value={{
      allState,
      toggleAll
    }}>
        { children }
    </AllContext.Provider>
  )
}

