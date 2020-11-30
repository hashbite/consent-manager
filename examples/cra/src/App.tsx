/** @jsxImportSource @emotion/react */
import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from 'react-router-dom'

import {
  PrivacyManager,
  usePrivacyManagerShield,
  usePageViewEventTrigger,
  useDecision as usePrivacyManagerDecision,
  PrivacyManagerStateHook,
  PrivacyManagerConfig,
  usePrivacyFormVisible,
} from '@techboi/privacy-manager'
import '@techboi/privacy-manager/dist/index.css'

import { GlobalStyles } from 'twin.macro'
import YouTube from 'react-youtube'
import createPersistedState from 'use-persisted-state'

import { GlobalFallbackComponent, LocalFallbackComponent } from './components/Fallback'
import './App.css'

import { PrivacyShield } from './custom-theme/PrivacyShield'
import { PrivacyManagerForm as CustomPrivacyManagerForm } from './custom-theme/PrivacyManagerForm'

export const usePrivacyManagerState: PrivacyManagerStateHook = createPersistedState(
  'privacy-manager'
)

// Implementation according to react-router docs:
// https://reactrouter.com/web/api/Hooks/uselocation

function usePageEvents() {
  const location = useLocation()
  const triggerEvent = usePageViewEventTrigger('matomo')

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
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/dashboard'>
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
      <PrivacyShield id="youtube">hidden youtube text</PrivacyShield>
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

function About() {
  const canDisplayYoutube = usePrivacyManagerDecision('youtube')
  const ShieldedYoutube = usePrivacyManagerShield(
    'youtube',
    YouTube,
    LocalFallbackComponent
  )

  return (
    <div>
      <h2>About</h2>
      <pre>{JSON.stringify(canDisplayYoutube)}</pre>
      {canDisplayYoutube && <YouTube id='fooodQw4w9WgXcQ' />}
      <ShieldedYoutube id='fooodQw4w9WgXcQ' />
      <PrivacyShield id='youtube'>
        <YouTube id='fooodQw4w9WgXcQ' />
      </PrivacyShield>
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
        <div style={{ border: '3px solid tomato' }}>{children}</div>
      ),
      pageViewEventHandler: (location) => {
        console.log(
          'emulated matomo page track event for',
          location.pathname + location.search
        )
      }
    },
    {
      id: 'some-other-wrapper',
      wrapperComponent: ({ children }) => (
        <div style={{ border: '3px solid blue' }}>{children}</div>
      )
    }
  ]
}

const PrivacyManagerBottomBar: React.FC = () => {
  const showForm = usePrivacyFormVisible()

  if (!showForm) {
    console.log('DEV: showForm would prevent render')
    // return null
  }

  // return <PrivacyManagerForm />
  return <CustomPrivacyManagerForm />
}

const App: React.FC = () => {
  const storage = usePrivacyManagerState({
    decisions: {}
  })
  return (
    <Router>
      <GlobalStyles />
      <PrivacyManager
        config={privacyManagerConfig}
        store={storage}
        fallbackComponent={GlobalFallbackComponent}
      >
        <BasicExample />
        <PrivacyManagerBottomBar />
      </PrivacyManager>
    </Router>
  )
}
export default App
