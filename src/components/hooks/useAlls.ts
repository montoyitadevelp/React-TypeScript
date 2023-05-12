import { useContext } from "react"
import { AllContext } from "../context/AllContext"

export const useAlls = () => {
    const { allState, toggleAll} = useContext( AllContext );
    const { alls } = allState;

    return {
        alls: alls,
        pendingAlls: alls.filter( all => !all.completed ).length,
        toggleAll
        
    }
}