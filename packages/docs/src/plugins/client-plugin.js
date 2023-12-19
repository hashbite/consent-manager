const { getMatomoTracker } = require('@consent-manager/integration-matomo')
const { getSegment } = require('@consent-manager/integration-segment')
const {
  getGoogleAnalytics,
} = require('@consent-manager/integration-google-analytics')

module.exports = (function () {
  return {
    onRouteUpdate({ location }) {
      const { trackPageView } = getMatomoTracker()
      const analytics = getSegment()
      const ReactGA = getGoogleAnalytics()
      window.setTimeout(() => {
        trackPageView(location.pathname)
        if (analytics && analytics.page) {
          analytics.page()
        }
        if (ReactGA && ReactGA.pageview) {
          ReactGA.pageview(location.pathname + location.search)
        }
      }, 0)
    },
  }
})()
