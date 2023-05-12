
import { CountRex } from "./components/CountRex";
import { Counter } from "./components/Counter";
import { Forms } from "./components/Forms";
import { Forms2 } from "./components/Forms2";
import PopCount from "./components/PopCount";
import { Usuario } from "./components/Usuario";
import { All } from './components/All'
import { UseNavigateSVG } from "./components/hooks/UseNavigateSVG";
import { UseNavigateSVG2 } from "./components/hooks/UseNavigateSVG2";
import { LogoDev } from "./components/LogoDev";



function App() {
  return (
    <>
      <UseNavigateSVG/>
      <UseNavigateSVG2/>
      <LogoDev/>
      

      <h1 className="mt-2" >
      Some examples and functions with React | TypeScript
      </h1>
      <hr/>

      <Counter />
      <hr/>
      
      <Usuario />

      <h2>useEffect - useRef</h2>
      <hr/>
      <br/>

      <PopCount />
      

      <h2>
        useReducer
      </h2>
      <hr/>
      <CountRex />
      <br/>
      <hr/>
      <h2>CustomHooks</h2>
      
      <Forms />

      <br/>

      <Forms2 />

      <br/>

      <hr/>
      <All />


    </>
  );
}

export default App;
