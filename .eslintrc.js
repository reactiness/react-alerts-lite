module.exports = {
  "parser": "babel-eslint",
  "extends": ["plugin:prettier/recommended"],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jquery": true,
    "jest": true,
    "jest/globals": true
  },
  "globals": {
    "expect": true,
    "shallow": false,
    "render": false,
    "mount": false
  },
  "plugins": [
    "react",
    "jest",
    "import"
  ],
  "root": true,
  "settings": {
    "import/resolver": {
      "node": {
        "paths": [
          "src"
        ]
      }
    }
  },
}