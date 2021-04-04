module.exports = {
  rules: {
    'do-not-inject-scripts': {
      meta: {
        docs: {
          description:
            'Return the script tags instead of injecting them yourself. That way they can be removed when the user revokes consent.',
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
                message:
                  'Return the script tags instead of injecting them yourself. That way they can be removed when the user revokes consent.',
              })
            }
          },
        }
      },
    },
  },
}
