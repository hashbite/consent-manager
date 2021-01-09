---
id: getting-started
title: Getting Started
---

## Installation

```sh
npm install @techboi/consent-manager use-persisted-state
```
```sh
yarn add @techboi/consent-manager use-persisted-state
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

Wrap your application with the [<ConsentManager/> provider](provider.md).


```diff
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

+ import { ConsentManager } from '@techboi/consent-manager'
+ import createPersistedState from 'use-persisted-state'


+ const useConsentStateStore = createPersistedState('consent-manager-docs')

+ const Wrapper = () => {
+   const storage = useConsentStateStore()
+   const config = {
+     integrations: [
+       {
+         id: 'youtube',
+         title: 'YouTube',
+         description:
+           'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.',
+       },
+     ],
+   }
+   <ConsentManager config={config} store={storage}>
+     <App />
+   </ConsentManager>,
+ }

ReactDOM.render(
-   <App />
+   <Wrapper />
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
+ import { PrivacyShield } from '@techboi/consent-manager'


const YouTube = ({ id, ...props }) => {
  return (
+    <PrivacyShield id="youtube">
      <ReactYouTube videoid={id} {...props} />
+    </PrivacyShield>
  )
}

export default YouTube
```

## Displaying a consent form to the end user

As last step we need to give the end user a way to give consent on data processing and sharing with external parties.

So let us add a simple form unstyled form to enable that functionallity.

```diff
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

- import { ConsentManager } from '@techboi/consent-manager'
+ import { ConsentManager, ConsentManagerForm } from '@techboi/consent-manager'
import createPersistedState from 'use-persisted-state'

const Wrapper = () => {
  const storage = useConsentStateStore()
  const config = {
    integrations: [
      {
        id: 'youtube',
        title: 'YouTube',
        description:
          'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.',
      },
    ],
  }
  <ConsentManager config={config} store={storage}>
    <App />
+   <ConsentManagerForm />
  </ConsentManager>,
}

ReactDOM.render(
  <Wrapper />
  document.getElementById('root')
);
```


## Next steps

As you've probably seen, the styling is very rudimentary. This is on purpose, our goal is to add as little extra weight to your bundle size as possible. We try to support all common ways of styling in React. No matter if you prever plain css, BEM, css-in-js or other ways.

@todo implement and document custom styling. Sorry, we did not work in this, yet!
