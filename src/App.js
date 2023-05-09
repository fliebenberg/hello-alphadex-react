import { useEffect, useState, createContext } from "react";
import { init, clientState } from "alphadex-sdk-js";
import { PairsList } from "./PairsList";
import { PairInfo } from "./PairInfo";

init(); 
export const AdexStateContext = createContext();

function App() {
  
  const [adexState, setAdexState] = useState(clientState);

  useEffect(() => {
    let sub = clientState.stateChanged$.subscribe(newState => setAdexState(newState));
    return () => {
      if (sub) {
        sub.unsubscribe();
      }
    }
  }, []);
  
  return (
    <AdexStateContext.Provider value={adexState}>
      <h1>Hello AlphaDEX</h1>
      <p>AlphaDEX SDK connection status: {adexState.status}</p>
      <PairsList/>
      <PairInfo/>
    </AdexStateContext.Provider>
  );
}

export default App;
