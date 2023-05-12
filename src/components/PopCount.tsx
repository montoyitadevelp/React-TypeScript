import { useState } from "react"
import Time from "./Time"


const PopCount = () => {

  const [miliseconds, setMiliseconds] = useState(1000);

  


  return (
    <>
        <span>Miliseconds { miliseconds }</span>

        <br/>

        <button className="btn btn-outline-success" onClick={ () => setMiliseconds(1000) }>
          1000
        </button>
        <button className="btn btn-outline-success" onClick={ () => setMiliseconds(2000) }>
          2000
        </button>


        <Time miliseconds={ miliseconds} />
    </>
  )
}

export default PopCount