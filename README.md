## API

### Config


**Required**

* `privacyPolicy` - Link to privacy policy, because it's rendered everywhere
* `integrations` - `Record<IntegrationName, IntegrationConfig>` 
  * `IntegrationName` - project-wide identifier to associate components that are privacy protected


### Step by step

* just drop in a `<PrivacyManager>`
* empty integrations in config 

-> bottom bar with "are you fine that we are using no info?"

> I want to show a YouTube video
> - Literally everyone

> Have you asked user for permission to send data to this service?
> - European governments

> 💡 Let's not load data until we have permission

```javascript
function App () {
  // true / false
  const canDisplayYoutube = usePrivacyManagerDecision('youtube')
  // <Youtube /> or <Fallback />
  const ShieldedYoutube = usePrivacyManagerShield('youtube', YouTube, FallbackComponent)
  return (
    <div>
      <h2>About</h2>
      {canDisplayYoutube && <YouTube id="dQw4w9WgXcQ" />}
      <ShieldedYoutube id="dQw4w9WgXcQ" />
      {/* <YouTube /> or <Fallback /> */}
      <PrivacyShield integrationId="youtube">
        <YouTube id="dQw4w9WgXcQ" />
      </PrivacyShield>
    </div>
  )
```
