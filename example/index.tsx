import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {
  PrivacyManager,
  PrivacyManagerConfig,
  PrivacyManagerForm,
  PrivacyShield,
} from '@techboi/privacy-manager'

const privacyManagerConfig: PrivacyManagerConfig = {
  integrations: [
    {
      id: 'video-platform',
      title: 'Video Inc.',
      description: 'Video Inc. is a popular service to share clips of cats.',
    },
    {
      id: 'integration-with-wrapper',
      title: 'Red Box Ltd.',
      description:
        'Adds red borders around your content, demonstrates use of components that do e.g. click tracking',
      wrapperComponent: ({ children }) => (
        <div style={{ border: '3px solid red' }}>{children}</div>
      ),
    },
  ],
}

const VideoPlatform: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div
      style={{
        backgroundColor: 'darkblue',
        color: 'white',
        border: '4px solid black',
        padding: '2em',
      }}
    >
      Video component with id <pre>{id}</pre>
    </div>
  )
}

const App = () => {
  const storage = React.useState({
    decisions: {},
  })

  return (
    <div>
      <PrivacyManager config={privacyManagerConfig} store={storage}>
        <main
          data-testid="privacy-manager-privacy-shield"
          style={{ margin: '4em auto', maxWidth: '420px' }}
        >
          <h1>Your content:</h1>
          <PrivacyShield id="video-platform">
            <VideoPlatform id="rick-roll" />
          </PrivacyShield>
        </main>
        <aside
          data-testid="privacy-manager-form-container"
          style={{ backgroundColor: '#eee', padding: '1em' }}
        >
          <PrivacyManagerForm />
        </aside>
      </PrivacyManager>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
