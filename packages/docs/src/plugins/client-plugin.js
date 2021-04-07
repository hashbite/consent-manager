const {
  getMatomo,
  trackPageViewSPA,
} = require('@consent-manager/integration-matomo')
const { getSegment } = require('@consent-manager/integration-segment')
const {
  getGoogleAnalytics,
} = require('@consent-manager/integration-google-analytics')

module.exports = (function() {
  return {
    onRouteUpdate({ location }) {
      const matomo = getMatomo()
      const segment = getSegment()
      const ReactGA = getGoogleAnalytics()
      window.setTimeout(() => {
        if (matomo) {
          trackPageViewSPA({ matomo, location })
        }
        if (segment && segment.page) {
          segment.page()
        }
        if (ReactGA && ReactGA.pageview) {
          ReactGA.pageview(location.pathname + location.search)
        }
      }, 0)
    },
  }
})()
