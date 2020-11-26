import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom'
import { Location } from 'history'
import YouTube from 'react-youtube'
import './App.css'

import {
  PrivacyManager,
  PrivacyShield,
  usePageViewEventTrigger,
  usePrivacyManagerDecision,
  usePrivacyManagerShield,
} from './privacy-manager'
import { PrivacyManagerConfig } from './privacy-manager/config'

// Implementation according to react-router docs:
// https://reactrouter.com/web/api/Hooks/uselocation

function usePageEvents() {
  let location = useLocation()
  let triggerEvent = usePageViewEventTrigger('matomo')
  React.useEffect(() => {
    triggerEvent(location)
  }, [location, triggerEvent])
}

function BasicExample() {
  usePageEvents()
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

const FallbackComponent = () => (
  <div>
    <img
      alt="No consent"
      src="https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif"
    />
  </div>
)

function About() {
  const canDisplayYoutube = usePrivacyManagerDecision('youtube')
  const ShieldedYoutube = usePrivacyManagerShield(
    'youtube',
    YouTube,
    FallbackComponent
  )
  return (
    <div>
      <h2>About</h2>
      <pre>{JSON.stringify(canDisplayYoutube)}</pre>
      {canDisplayYoutube && <YouTube id="fooodQw4w9WgXcQ" />}
      <ShieldedYoutube id="fooodQw4w9WgXcQ" />
      <PrivacyShield id="youtube">
        <YouTube id="fooodQw4w9WgXcQ" />
      </PrivacyShield>
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


const privacyManagerConfig: PrivacyManagerConfig = {
  // .. some config values
  integrations: [
    { id: 'youtube' },
    {
      id: 'matomo',
      wrapperComponent: ({ children }) => (
        <div style={{ border: '3px solid tomato'}}>{children}</div>
      ),
      pageViewEventHandler: (location: Location) => {
        console.log(
          'emulated matomo page track event for',
          location.pathname + location.search
        )
      }
    },
    {
      id: 'some-other-wrapper',
      wrapperComponent: ({ children }) => (
        <div style={{ border: '3px solid blue'}}>{children}</div>
      ),
    },
  ],
}

const GlobalFallbackComponent = () => (
  <div>
    <img
      alt="No consent"
      src="https://media.giphy.com/media/iKHNc9zt4khhufgtdi/giphy.gif"
    />
  </div>
)

const App: React.FC = () => {
  return (
    <Router>
      <PrivacyManager
        config={privacyManagerConfig}
        fallbackComponent={GlobalFallbackComponent}
      >
        <BasicExample />
      </PrivacyManager>
    </Router>
  )
}
export default App
