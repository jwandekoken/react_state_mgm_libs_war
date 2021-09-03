import React, { createContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { useInterpret } from '@xstate/react';
import { waterMachine } from './machines/waterMachine';
import Home from "./pages/Home"
import Page01 from "./pages/Page01"

/*
  Context Setup
*/
const GlobalStateContext = createContext({} as any)

const GlobalStateContextProvider: React.FC = ({children}) => {

  // returns a service, which is a static reference to the running machine which can be subscribed to. This value never changes, so we don't need to worry about wasted re-renders
  const waterService = useInterpret(waterMachine)

  return (
    <GlobalStateContext.Provider value={{ waterService }}>
      {children}
    </GlobalStateContext.Provider>
  )
}

/*
  App
*/
const App = () => {
  return (
    <GlobalStateContextProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/page01">Page01</Link>
              </li>

            </ul>
          </nav>

          <Switch>
            <Route path="/page01">
              <Page01 />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </GlobalStateContextProvider>
    
  )
}

export default App
export { GlobalStateContext }
