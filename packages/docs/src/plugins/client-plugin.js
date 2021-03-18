const { getMatomoTracker } = require('@consent-manager/integration-matomo')

module.exports = (function() {
  return {
    onRouteUpdate({ location }) {
      const { trackPageView } = getMatomoTracker()
      window.setTimeout(() => trackPageView(location.pathname), 0)
    },
  }
})()
