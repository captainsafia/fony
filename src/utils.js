const Chance = require("chance");

const chance = new Chance();
const chanceTypes = Object.keys(Object.getPrototypeOf(chance));

function valid(type) {
  return chanceTypes.indexOf(type) !== -1;
}

function getArrayValue(definition) {
  if (definition.length !== 2) {
    return null;
  }
  const type = definition[0];
  const count = definition[1];
  if (!valid(type) || typeof count !== "number" || count === 0) {
    return null;
  }
  return new Array(count).fill(null).map(function() {
    return getValue(type);
  });
}

function getValue(type) {
  if (Array.isArray(type)) {
    return getArrayValue(type);
  }
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
