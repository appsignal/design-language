module.exports = {
  plugins: [
    require("postcss-import")({
      plugins: [require("stylelint")()]
    }),
    require("postcss-preset-env")(),
    require("postcss-nested"),
    require("postcss-extend-rule"),
    require("postcss-reporter")({ clearReportedMessages: true }),
    require("./plugins/atResponsive.js")({
      divider: "\\:",
      breakpoints: [
        { name: "sm", breakpoint: "25rem" },
        { name: "md", breakpoint: "40rem" },
        { name: "lg", breakpoint: "60rem" },
        { name: "xlg", breakpoint: "75rem" }
      ]
    })
  ]
}
