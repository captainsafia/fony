const Chance = require("chance");

const chance = new Chance();

function getArrayValue(definition) {
  var type = definition[0];
  var count = definition[1];
  if (typeof type === "string" && typeof count === "number" && count > 0) {
    return new Array(count).fill(null).map(function() {
      return getValue(type);
    });
  } else {
    return [];
  }
}

function getValue(type) {
  if (Array.isArray(type) && type.length === 2) {
    return getArrayValue(type);
  }
  if (typeof type === "object" && type != null) {
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
