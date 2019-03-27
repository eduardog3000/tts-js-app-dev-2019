// Given number and configuration object for noun,
// return phrase for that number of the noun.
/*const getPluralizer = (number, configuration) =>
  `${number}`;*/

const pluralize = (number, config) =>
  config.suffix != undefined ? pluralizeSuffix(number, config) : pluralizeIrreg(number, config);

const pluralizeSuffix = (number, config) =>
  `${number} ${config.singular}${number === 1 ? '' : config.suffix}`;

const pluralizeIrreg = (number, config) =>
  `${number} ${number === 1 ? config.singular : config.plural}`;

const thing = {
  singular: 'thing',
  suffix: 's',
};
console.log(pluralize(1, thing));
console.log(pluralize(0, thing));
console.log(pluralize(2, thing));

const sheep = {
  singular: 'sheep',
  suffix: '',
};
console.log(pluralize(1, sheep));
console.log(pluralize(3, sheep));

const ox = {
  singular: 'ox',
  suffix: 'en',
};
console.log(pluralize(1, ox));
console.log(pluralize(2, ox));

const inch = {
  singular: 'inch',
  suffix: 'es',
};
console.log(pluralize(1.0, inch));
console.log(pluralize(1.5, inch));

const goose = {
  singular: 'goose',
  plural: 'geese',
};
console.log(pluralize(1, goose));
console.log(pluralize(6, goose));
