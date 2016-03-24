module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": [
        "react",
        "babel"
    ],
    "rules": {
      "no-unused-vars": [2, { "varsIgnorePattern": "Radium" }]
    },
    "globals": {
      // Mocha
      "describe": true,
      "it": true
    }
};
