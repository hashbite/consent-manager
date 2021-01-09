---
id: getting-started
title: Getting Started
---

## Installation

```sh
npm install @techboi/privacy-manager

# or

yarn add @techboi/privacy-manager
```

## Embedding into your application

Lets start off with a very basic implementation of a React app.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

### Preparing the context

Wrap your application with the [<PrivacyManager/> provider](provider.md).


```diff
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
+  const storage = React.useState({
+    decisions: {},
+  })
+  const config = {
+    integrations: [
+      {
+        id: 'youtube',
+        title: 'YouTube',
+        description:
+          'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.',
+      },
+    ],
+  }
+  <PrivacyManager config={config} store={storage}>
    <App />
+  </PrivacyManager>,
  document.getElementById('root')
);
```


## Wrapping components that need users concent for proper functionallity

Lets take this very simple component as example, it renders a YouTube video.

```js
import React from 'react'
import ReactYouTube from 'react-youtube'

const YouTube = ({ id, ...props }) => {
  return <ReactYouTube videoid={id} {...props} />
}

export default YouTube
```

As YouTube loves tracking, injects cookies and does more, we need our users consent to render the video.

### Shielding the component

To ensure no data can be sent anywhere, we wrap our component with the PrivacyShield component.

```diff
import React from 'react'
import ReactYouTube from 'react-youtube'
+import { PrivacyShield } from '@techboi/privacy-manager'


const YouTube = ({ id, ...props }) => {
  return (
+    <PrivacyShield id="youtube">
      <ReactYouTube videoid={id} {...props} />
+    </PrivacyShield>
  )
}

export default YouTube
```
