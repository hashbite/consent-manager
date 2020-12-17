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

### Integrations Lifecycle states

**Integration State**

This state keeps track of all available integrations provided to `<PrivacyManager />`

**Decisions State**

This state keeps track of all already answered integration keys

1. Initialize all available integrations with `false` (always opt-in)
2. Load from localStorage with 1) as the default value
3. hook exposes decision getter that warns in dev if non-configured key is accessed
4. hook exposes decision getter whether unanswered integrations are available

```json
{
  "decisions": {
    youtube: true,
    vimeo: false
  }
}
```
----

Optionally pass in a `store` useState like array, that contains user preselection. Setter will be called with new store state whenever user selection changes.

```json
{ decisions: { youtube: true, matomo: false } }
```

Internal state acts on passed in `integrations`, combined with availbale decisions.
Pending decisions are always `false` (i.e. opt-in only). 

Main interface for retrieving and updating selections is `useEnabledIntegrations()` which returns `[string[], (enabled: string[]) => void]`.

Main interface for rendering integrations is `useIntegrations()` which returns all registered integrations.

**<PrivacyManagerForm />**

Uses integations and decisions to create an internal representation for the initial state of the `<DecisionsForm />` component.

**<DecisionsForm />**



