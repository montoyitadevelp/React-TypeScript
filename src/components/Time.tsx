import { useEffect, useRef, useState } from "react";


type TimesArgs = {
  miliseconds: number,

}

const Time = ( { miliseconds }: TimesArgs) => {

  const [seconds,  setSeconds] = useState(0);
  const ref = useRef<NodeJS.Timeout>();
 

  useEffect( () => {
    ref.current && clearInterval( ref.current ); //Esto signifca un IF condicional


    ref.current = setInterval( () => setSeconds(s => s + 1) , miliseconds);
 

  }, [miliseconds])


  return (
    <>
        <h4>
            Timer: <small>{ seconds }</small>
        </h4>
    </>
  )
}

export default Time