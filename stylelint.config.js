module.exports = {
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["extend"]
      }
    ]
  },
  extends: [
    "stylelint-config-standard",
    "stylelint-config-property-sort-order-smacss"
  ]
}
