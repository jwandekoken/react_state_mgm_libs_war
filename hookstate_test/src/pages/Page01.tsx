import React from "react"
import { useState } from '@hookstate/core';
import { globalState } from "./Home"

const Page01 = () => {
  const state = useState(globalState);
  
  return (
    <div>
      <h1>Page01</h1>
      <button onClick={() => state.set(p => p + 1)}>Increment</button> {" "}
      <button onClick={() => state.set(0)}>Reset</button>
    </div>
  )
}

export default Page01
