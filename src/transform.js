// Generate AST from an es6 object initializer string
// May want to support syntax like "word*3" to generate an array of 3 words
// or other more complex syntaxes
const babel = require("babel-core");

// transforms ({ a: a }) or equivalently ({ a }) into
// ({a: "a" }), note the value is stringified
function transformPlugin(babel) {
  const { types: t } = babel;

  return {
    visitor: {
      Property({ node }) {
        if (t.isIdentifier(node.value))
          node.value = t.stringLiteral(node.value.name);
      }
    }
  };
}

module.exports = code => {
  return babel.transform(`(${code})`, {
    plugins: [transformPlugin],
    ast: false // don't need the ast (for now?)
  }).code;
};
