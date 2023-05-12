
import { useAlls } from './hooks/useAlls'

export const Title = () => {

    const { pendingAlls } = useAlls();



  return (
    <h1>
        All: { pendingAlls }
    </h1>
  )
}

