import { useContext } from "react"
import { AdexStateContext } from "./App"

export function PairInfo() {
  const adexState = useContext(AdexStateContext);
  return (
    <div>
      <h3> Information for currently selectd pair</h3>
      <p>Name: {adexState.currentPairInfo.name}</p>
      <p>Address: {adexState.currentPairInfo.address}</p>
      <p>Last Price: {adexState.currentPairInfo.lastPrice}</p>
      <p>No of sell prices in orderbook: {adexState.currentPairOrderbook.sells.length}</p>
      <p>No of buy prices in orderbook: {adexState.currentPairOrderbook.buys.length}</p>
    </div>
  )
}