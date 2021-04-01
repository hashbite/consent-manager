const { getMatomoTracker } = require('@consent-manager/integration-matomo')
const { getSegment } = require('@consent-manager/integration-segment')

module.exports = (function() {
  return {
    onRouteUpdate({ location }) {
      const { trackPageView } = getMatomoTracker()
      const analytics = getSegment()
      window.setTimeout(() => {
        trackPageView(location.pathname)
        if (analytics) {
          analytics.page()
        }
      }, 0)
    },
  }
})()
