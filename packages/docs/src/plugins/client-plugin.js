const {
  getMatomoTracker,
} = require('@techboi/consent-manager-integration-matomo')

module.exports = (function() {
  return {
    onRouteUpdate({ location }) {
      const { trackPageView } = getMatomoTracker()
      window.setTimeout(() => trackPageView(location.pathname), 0)
    },
  }
})()
