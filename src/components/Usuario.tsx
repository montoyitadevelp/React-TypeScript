import { useState } from "react";

interface User {
    uid: string;
    name: string;
}

interface Reset {
    reset: string;
}


export const Usuario = () => {

    const [user, setUser] = useState<User>(); 

    const login = () => {
        setUser({
            uid: '768I7',
            name: 'Simon Montoya',
        });

    }

    const [reset, setReset] = useState<Reset>();

    const reseted = () => {
        setReset({
            reset: 'The user has been reseted',
        });
    }

  return (
    <div className="mt-5">
        <h3>
            User: 
        </h3>

        <button className="btn btn-outline-primary" onClick={ login }>
            Login
        </button>

        <button className='btn btn-outline-danger' onClick={ reseted }>
            Reset
        </button>

        {
            (!user)
                ? <pre> The user doesnt match</pre>
                : <pre> { JSON.stringify( user ) } </pre>
        }

        {
            (!reset)
                ? <pre> The user has been reseted</pre>
                : <pre> { JSON.stringify( reset) }</pre>
        }

    </div>
  )
}
