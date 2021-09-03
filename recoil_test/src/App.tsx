import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import { RecoilRoot } from "recoil"

import Home from "./pages/Home"
import Page01 from "./pages/Page01"

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/exemple01">Page 01</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/exemple01">
              <Page01 />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </RecoilRoot>
  )
}

export default App
