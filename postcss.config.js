module.exports = {
  plugins: [
    require("postcss-import")({
      plugins: [require("stylelint")({})]
    }),
    require("postcss-preset-env")(),
    require("postcss-nested"),
    require("postcss-reporter")({ clearReportedMessages: true })
  ]
}
