;(() => {
  // Never init twice
  if (window.rbltd && window.rbltd.initialized) {
    return
  }

  // Array style tracking like Google Analytics or Matomo
  const redBoxLtdTracking = []

  const push = data => {
    const [eventType, ...vals] = data

    redBoxLtdTracking.push(...vals)

    if (eventType === 'page') {
      console.log(`page view: ${vals[0]}`)
    }
    if (eventType === 'event') {
      console.log('custom event tracked', vals)
      alert(['told ya!', ...vals].join(' '))
    }
  }

  // Track all events that are gathered already from somewhere else
  if (Array.isArray(window.rbltd)) {
    window.rbltd.forEach(data => {
      console.log({ data })
      push(...data)
    })
  }

  window.debugme = redBoxLtdTracking
  window.rbltd = { push, initialized: true }
})()
