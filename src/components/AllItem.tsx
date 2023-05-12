
import { All } from "./interfaces/interfaces"
import { useAlls } from "./hooks/useAlls"

interface propsitems {
    all: All
}



export const AllItem = ({ all }: propsitems) => {

  const { toggleAll } = useAlls();



  return (
    <li style={{
      cursor: 'pointer',
      textDecoration: all.completed ? 'line-through' : ''
    }} onDoubleClick={ () => toggleAll( all.id ) }>
        { all.desc}
    </li>
  )
}
