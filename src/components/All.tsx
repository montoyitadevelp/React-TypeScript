import { AllList } from "./AllList"
import { Title } from "./Title"
import { AllProvider } from "./context/AllProvider"

export const All = () => {


  return (
    <AllProvider>
       <Title />
       <AllList />
    </AllProvider>
    
  )
}
