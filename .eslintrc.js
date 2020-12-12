module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true,
    "jest": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
  },
  "globals": {
    "lang": true
  },
  "plugins": [
    "react",
    "react-native"
  ],
  "rules": {
    "react-native/no-unused-styles": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react/prop-types": 0,
    "react/require-default-props": 0,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
    "object-curly-spacing": ["error", "always"],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 0, "maxEOF": 0 }],
    "beforeColon": false,
    "afterColon": true,
    "mode": "strict",
    "import/newline-after-import": ["error", { "count": 1 }],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "react/forbid-prop-types": 2,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "no-extra-boolean-cast": 0,
    "no-control-regex": 0,
    "no-underscore-dangle": 0,
    "react/no-array-index-key": [
      0
    ],
    "max-len": [
      "error",
      {
        "code": 120,
        "ignoreComments": true
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ],
    "import/no-named-as-default": "off",
    "import/prefer-default-export": "off",
    "indent": "error",
    "indent-legacy": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "prefer-destructuring": 1,
    "no-else-return": 0,
    "react/no-string-refs": 0,
    "react/jsx-max-props-per-line": [2, { "maximum": 2, "when": "multiline" }],
    "no-unused-vars": ["error", { "args": "none" }],
    "key-spacing": ["error", { "mode": "strict" }],
    "arrow-body-style": [
      "error",
      "as-needed", { "requireReturnForObjectLiteral": false }
    ],
    "comma-dangle": ["error", "never"],
    "react/jsx-no-bind": [
      "error",
      {
        "ignoreRefs": true,
        "allowArrowFunctions": false,
        "allowBind": true
      }
    ],
    "react/jsx-wrap-multilines": 0,
    "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
    "padded-blocks": 0,
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "global-require": 0,
    "eqeqeq": ["error", "always"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "space-infix-ops": ["error", { "int32Hint": false }]
  },
  "overrides": [
    {
      "files": [ "app/i18next/*.js" ],
      "rules": {
        "max-len": [0, {}]
      }
    }
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".android.js",
          ".ios.js"
        ]
      }
    }
  },
  "extends": [
    "airbnb",
    "eslint:recommended",
    "plugin:flowtype/recommended"
  ]
};
