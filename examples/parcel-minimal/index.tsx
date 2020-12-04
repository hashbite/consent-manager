import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  PrivacyManager,
  PrivacyManagerConfig,
  PrivacyManagerForm,
  PrivacyShield,
} from '@techboi/privacy-manager';

const privacyManagerConfig: PrivacyManagerConfig = {
  integrations: [
    { id: 'video-platform' },
    {
      id: 'integration-with-wrapper',
      wrapperComponent: ({ children }) => (
        <div style={{ border: '3px solid red' }}>{children}</div>
      ),
    },
  ],
};

const FallbackComponent: React.FC = () => (
  <div
    style={{
      width: '16vw',
      height: '9vw',
      backgroundColor: 'black',
      color: 'white',
    }}
  >
    Your privacy decisions prevent you from seeing this content
  </div>
);

const VideoPlatform: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div
      style={{
        width: '16vw',
        height: '9vw',
        backgroundColor: 'darkblue',
        color: 'white',
      }}
    >
      video component with id <pre>{id}</pre>
    </div>
  );
};

const App = () => {
  const storage = React.useState({
    decisions: {},
  });

  return (
    <div>
      <PrivacyManager
        config={privacyManagerConfig}
        store={storage}
        fallbackComponent={FallbackComponent}
      >
        <PrivacyShield id="video-platform">
          <VideoPlatform id="rick-roll" />
        </PrivacyShield>
        <PrivacyManagerForm />
      </PrivacyManager>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
