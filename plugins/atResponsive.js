var postcss = require("postcss")

function convertBreakPointsInRules(breakpoints) {
  return breakpoints.map(breakpoint => {
    const processedBreakpoint = Object.assign({}, breakpoint)
    let atRule = postcss.atRule({
      name: "media",
      params: `(min-width: ${processedBreakpoint.breakpoint})`
    })

    processedBreakpoint.atRule = atRule
    return processedBreakpoint
  })
}

module.exports = postcss.plugin("atResponsive", function(opts) {
  opts = opts || {}

  return function(root, result) {
    root.walkAtRules("responsive", atRule => {
      const rules = atRule.nodes

      const breakpointRules = convertBreakPointsInRules(opts.breakpoints)

      rules.forEach(rule => {
        const startOfResponsiveBlock = rule.parent.parent
        const clone = rule.clone()
        startOfResponsiveBlock.insertBefore(rule.parent, clone)

        breakpointRules.forEach(breakpoint => {
          const newRule = rule.clone({
            selector: `.${breakpoint.name}${
              opts.divider
            }${rule.selector.substring(1)}`
          })
          breakpoint.atRule.append(newRule)
        })
      })

      root.insertAfter(
        atRule,
        breakpointRules.map(breakpoint => {
          return breakpoint.atRule
        })
      )

      atRule.remove()
    })
  }
})
