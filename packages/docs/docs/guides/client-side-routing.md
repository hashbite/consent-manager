# Client-Side Routing and Tracking in SPAs

Single Page Applications (SPAs) update the content without reloading the entire page, which can make traditional page view tracking challenging. To accurately track page views in such applications, you can use the `trackPageViewSPA` method provided by some of our integrations.

Your adjusted guide for client-side routing and tracking in SPAs is well-structured and provides a clear example using the Matomo integration. Here's an enhancement to include the tracking of both old and new locations:

### Enhanced Guide for Client-Side Routing and Tracking in SPAs

#### Implementing Enhanced Routing Event Listener
When using client-side routing in your SPA, it's important to track both the new and previous locations to understand user navigation paths accurately. Here's how you can implement this with the Matomo integration:

```javascript
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // or your specific routing library
import { getMatomoTracker } from '@consent-manager/integration-matomo';

const App = () => {
  const router = useRouter(); // Hook from your routing library
  const { trackPageViewSPA } = getMatomoTracker();
  const [prevLocation, setPrevLocation] = useState(
    typeof window !== "undefined" ? window.location : undefined
  );

  useEffect(() => {
    // Function to handle route changes
    const handleRouteChange = () => {
      const { location } = window;

      // Track the page view with current and previous locations
      trackPageViewSPA && trackPageViewSPA({ location, prevLocation });

      // Update the previous location
      setPrevLocation(location);
    };

    // Set up a listener for route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    // Clean up the listener when the component unmounts
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [prevLocation, router.events, trackPageViewSPA]);

  // Your app's rendering logic
  return (
    // Your routes/components
  );
};

export default App;
```

#### Notes:
- The `useState` hook is used to keep track of the previous location.
- The `useEffect` hook sets up a listener on route changes and updates the tracking information accordingly.
- This approach provides more detailed analytics on how users navigate through your SPA.

This enhanced guide ensures that your SPA's client-side routing and tracking accurately reflect user interactions.