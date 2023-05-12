import { useState } from 'react';


export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const increase = ( numero: number = 1):void => {
        setCounter( counter + numero);
    }

  return (
    <div className="mt-5">
        <h3>UseState</h3>
        <h3>
            Counter: 
        </h3>
        <span>
            Values: { counter }
        </span>
        <br />
        <button className='btn btn-outline-primary mt-2' onClick={ () => increase() }>
            +1
        </button>
        <button className='btn btn-outline-primary mt-2' onClick={ () => increase(2) }>
            +2
        </button>
        <button className='btn btn-outline-danger mt-2' onClick={ () => setCounter(0) }>
            Reset
        </button>
    </div>
  )
}
