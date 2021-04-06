module.exports = {
  rules: {
    'do-not-inject-scripts': {
      meta: {
        docs: {
          description: 'Our own useScript() hook should be used.',
        },
        schema: [],
      },
      create: function(context) {
        return {
          CallExpression: function(node) {
            var callee = node.callee

            if (
              callee?.object?.name === 'document' &&
              callee?.property?.name === 'createElement' &&
              node?.arguments[0] &&
              node?.arguments[0].value === 'script'
            ) {
              context.report({
                node,
                message: [
                  'Do not create script tags on your own. You might break the consent detection and revocation.',
                  "import { useScript } from '@consent-manager/core'",
                  "useScript('//foo.bar/tracking.js')",
                ].join('\n'),
              })
            }
          },
        }
      },
    },
  },
}
