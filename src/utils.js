const Chance = require("chance");

const chance = new Chance();

function getValue(type) {
  if (typeof type === "object" && !Array.isArray(type) && type != null) {
    return createData(type);
  }
  try {
    return chance[type]();
  } catch (exception) {
    return null;
  }
}

function createData(template) {
  const output = {};
  Object.keys(template).map(function(key, index) {
    output[key] = getValue(template[key]);
  });
  return output;
}

module.exports = createData;
