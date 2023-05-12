/* import { useContext } from "react";
import { AllContext } from "./context/AllContext" */
import { AllItem } from "./AllItem";
import { useAlls } from "./hooks/useAlls";


export const AllList = () => {

/*     const { allState } = useContext( AllContext );
    const { alls } = allState */
const { alls } = useAlls();

  return (
    <ul>
        { alls.map( all => <AllItem key={ all.id } all={ all }  />)}
    </ul>
  )
}
