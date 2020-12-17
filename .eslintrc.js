module.exports = {
  "extends": [
    "react-app",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "@typescript-eslint/semi": ["error", "never"],
    "@typescript-eslint/member-delimiter-style": ["error", {
      "multiline": {
          "delimiter": "none",
          "requireLast": true
      },
      "singleline": {
          "delimiter": "comma",
          "requireLast": false
      }
  }]
  }
}
