import React, { useContext } from "react"
import { useActor } from '@xstate/react';
import { GlobalStateContext } from "../App"

const Page01 = () => {
  const globalServices = useContext(GlobalStateContext);
  const state: any = useActor(globalServices.waterService)[0];

  return (
    <div>
      <h1>Page01</h1>
      <p>
        State: { state.value }
      </p>
    </div>
  )
}

export default Page01
