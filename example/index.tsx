import * as React from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom'

import {
  ConsentManager,
  ConsentManagerConfig,
  ConsentManagerForm,
} from '@consent-manager/core'

import RouteHome from './routes/home'
import RouteVideo from './routes/video'

import { videoIncIntegration } from './integrations/social-video-inc'
import { innocentPixelIntegration } from './integrations/tracker-innocent-pixel'
import {
  redBoxLtdIntegration,
  useRedBoxLtd,
} from './integrations/tracker-red-box-ltd'

const consentManagerConfig: ConsentManagerConfig = {
  integrations: [
    videoIncIntegration(),
    redBoxLtdIntegration(),
    innocentPixelIntegration(),
  ],
}

const PageViewTracker: React.FC = () => {
  const location = useLocation()
  const redBoxLtdTracker = useRedBoxLtd()

  React.useEffect(() => {
    window.setTimeout(() => {
      redBoxLtdTracker?.trackPageView &&
        redBoxLtdTracker.trackPageView(location)
    }, 0)
  }, [location, redBoxLtdTracker])

  return null
}

const App = () => {
  const storage = React.useState({
    decisions: {},
  })

  return (
    <ConsentManager config={consentManagerConfig} store={storage}>
      <Router>
        <PageViewTracker />
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/" data-testid="example-nav-home">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/video" data-testid="example-nav-video">
                  Video
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main style={{ margin: '4em auto', maxWidth: '420px' }}>
          <Switch>
            <Route path="/video">
              <RouteVideo />
            </Route>
            <Route path="/">
              <RouteHome />
            </Route>
          </Switch>
        </main>
        <aside
          data-testid="consent-manager-form-container"
          style={{ backgroundColor: '#eee', padding: '1em' }}
        >
          <ConsentManagerForm />
        </aside>
      </Router>
    </ConsentManager>
  )
}

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
