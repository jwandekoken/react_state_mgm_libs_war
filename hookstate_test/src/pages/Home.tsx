import React from "react"
import { createState, useState } from '@hookstate/core';

const globalState = createState(0);

const Home = () => {
  const state = useState(globalState);

  return (
    <div>
      <h1>Home</h1>
      <b>Counter value: {state.get()}</b> {" "}
        <button onClick={() => state.set(p => p + 1)}>Increment</button> 
    </div>
  )
}

export default Home
export { globalState }