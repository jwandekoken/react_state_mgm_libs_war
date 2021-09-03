import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Page01 from "./pages/Page01"

const App = () => {
  return (
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
  )
}

export default App
