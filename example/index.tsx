import * as React from 'react'
import * as ReactDOM from 'react-dom'
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
} from '@techboi/consent-manager'

import RouteHome from './routes/home'
import RouteVideo from './routes/video'

import { createVideoIncIntegration } from './integrations/social-video-inc'
import {
  createRedBoxLtdIntegration,
  useRedBoxLtd,
} from './integrations/tracker-red-box-ltd'

const consentManagerConfig: ConsentManagerConfig = {
  integrations: [createVideoIncIntegration(), createRedBoxLtdIntegration()],
}

const PageViewTracker: React.FC = () => {
  const location = useLocation()
  const { trackPageView } = useRedBoxLtd()

  React.useEffect(() => {
    // @todo find proper solution to ensure page view is tracked after tracker api is initialized
    window.setTimeout(() => {
      trackPageView(location)
    }, 0)
  }, [location, trackPageView])

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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/video">Video</Link>
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

ReactDOM.render(<App />, document.getElementById('root'))
