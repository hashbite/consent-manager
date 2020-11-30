import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  'en-US': {
    translation: {
      copyright: '© Copyright {{year}}. All rights reserved.',
      save: 'save',
      open: 'open',
      close: 'close',
      next: 'next',
      previous: 'previous',
      first: 'first',
      last: 'last',
      newsReadMore: 'Read more...',
      newsTimeToRead: '{{minutes}} min. to read',
      privacyManagerPrivacyModeEnabled: 'privacy mode is on',
      privacyManagerHeadline: 'Your privacy is important to us!',
      privacyManagerDescription:
        'This website stores data such as cookies to enable necessary site functionality, anonymous analytics, and embedding of external services for videos, maps and more. You may change your settings at any time.',
      privacyShieldIntro: 'We disabled {{title}} to protect your privacy.',
      privacyShieldLearnMore:
        "Get more details at {{title}}'s privacy policy.",
      privacyDescriptionMapbox:
        'With Mapbox we can provide you an modern map experience.',
      privacyDescriptionYoutube:
        'We use YouTube to offer you further content as videos.',
      privacyDescriptionVimeo:
        'We use Vimeo to offer you further content as videos.',
    },
  },
  de: {
    translation: {
      copyright: '© Copyright {{year}}. Alle Rechte vorbehalten.',
      save: 'Speichern',
      open: 'Öffnen',
      close: 'Schließen',
      next: 'Weiter',
      previous: 'Zurück',
      first: 'Anfang',
      last: 'Ende',
      newsReadMore: 'Weiterlesen...',
      newsTimeToRead: '{{minutes}} Min. Lesezeit',
      privacyManagerPrivacyModeEnabled: 'Datenschutzmodus aktiviert',
      privacyManagerHeadline: 'Der Schutz Ihrer Daten ist uns wichtig!',
      privacyManagerDescription:
        'Diese Website speichert Daten unter Anderem in Form von Cookies. Diese ermöglichen wichtige Funktionen dieser Website, anonyme Webanalyse sowie die Einbindung externer Anbieter für Videos, Karten und weiteres. Sie können die Einstellungen jederzeit ändern.',
      privacyShieldIntro:
        'Zum Schutz Ihrer Privatspähre wurde {{title}} deaktiviert.',
      privacyShieldLearnMore:
        'Lesen sie die Datenschutzbestimmungen von {{title}}.',
      privacyDescriptionMapbox:
        'Wir nutzen Mapbox um Ihnen eine moderne Kartenansicht anzubieten.',
      privacyDescriptionYoutube:
        'Wir nutzen YouTube um Ihnen weitere Inhalte in Form von Videos anzubieten.',
      privacyDescriptionVimeo:
        'Wir nutzen Vimeo um Ihnen weitere Inhalte in Form von Videos anzubieten.',
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en-US",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
