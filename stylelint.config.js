module.exports = {
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["extend"]
      }
    ],
    "color-hex-case": "upper",
    "color-hex-length": "long",
    "comment-empty-line-before": null
  },
  extends: [
    "stylelint-config-standard",
    "stylelint-config-property-sort-order-smacss"
  ]
}
