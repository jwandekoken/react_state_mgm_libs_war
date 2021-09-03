import React, { useContext } from "react"
import { GlobalStateContext } from "../App"
import { useActor } from '@xstate/react';

const Home = () => {
  const globalServices = useContext(GlobalStateContext);

  // The useActor hook listens for whenever the service changes, and updates the state value.
  const state: any = useActor(globalServices.waterService)[0];

  return (
    <div>
      <h1>Agua</h1>
      <p>
        Estado: {state.value}
      </p> 

       <button onClick={() => globalServices.waterService.send("HEAT")}>
        Esquentar :D
      </button> {" "}
      <button onClick={() => globalServices.waterService.send("FREEZE")}>
        Esfriar :(
      </button>
    </div>
  )
}

export default Home