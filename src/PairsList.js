import { useContext } from "react"
import { AdexStateContext } from "./App"
import { clientState } from "alphadex-sdk-js";

export function PairsList () {
  const adexState = useContext(AdexStateContext);

  const selectPair = (pairAddress) => {
    clientState.currentPairAddress = pairAddress;
  }

  return (
    <div>
      <h3>AlphaDEX Pairs</h3>
      <ul>
        {adexState.pairsList.map((pair, index) => <li key={index}><button onClick={() => selectPair(pair.address)}>{pair.name}</button></li>)}
      </ul>
    </div>
  )
}