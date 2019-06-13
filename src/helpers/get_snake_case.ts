export const getSnakeCase = function (value) {
  return value.replace(/\W+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map(word => word.toLowerCase())
    .join('_');
};