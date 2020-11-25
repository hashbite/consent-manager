import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom'
import YouTube from 'react-youtube'
import './App.css'

// Implementation according to react-router docs:
// https://reactrouter.com/web/api/Hooks/uselocation

function usePageViews() {
  let location = useLocation()
  React.useEffect(() => {
    console.log(
      'emulated page track event for',
      location.pathname + location.search
    )
  }, [location])
}

function BasicExample() {
  usePageViews()
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </>
  )
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <YouTube id="fooodQw4w9WgXcQ" />
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <Router>
      <BasicExample />
    </Router>
  )
}
export default App
