const StyleDictionaryPackage = require('style-dictionary');

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const camelCase = (str) =>
  str.replace(/([-_][a-z])/gi, ($1) =>
    $1.toUpperCase().replace('-', '').replace('_', '')
  );

const pascalCase = (str) => capitalize(camelCase(str));

const getDesignTokensByCategory = (allProperties) =>
  allProperties.reduce((designTokens, prop) => {
    const categoryName = prop.path[0];
    const secondCategoryName = prop.path?.[1];

    if (categoryName === 'typography' && secondCategoryName !== 'font-family') {
      const subCategoryName = `${categoryName}${pascalCase(secondCategoryName)}`;
      if (!designTokens[subCategoryName]) {
        designTokens[subCategoryName] = [];
      }
      designTokens[subCategoryName].push({
        name: prop.path.slice(2).join('-'),
        path: prop.path.join('-'),
        value: prop.value
      });
    } else if (!['typography'].includes(categoryName)) {
      if (!designTokens[categoryName]) {
        designTokens[categoryName] = [];
      }
      designTokens[categoryName].push({
        name: prop.path.slice(1).join('-'),
        path: prop.path.join('-'),
        value: prop.value
      });
    }

    return designTokens;
  }, {});

StyleDictionaryPackage.registerFormat({
  name: 'scss/variables',
  formatter: (dictionary) => {
    let content = `:root {\n\t${dictionary.allProperties
      .map((prop) => `--${prop.path.join('-')}: ${prop.value};`)
      .join('\n\t')}\n}\n`;
    const designTokens = getDesignTokensByCategory(dictionary.allProperties);

    content += Object.entries(designTokens)
      .map(
        ([categoryName, values]) =>
          `\n$${categoryName}List: (\n\t${values
            .map(
              ({ name, path: variableName }) =>
                `'${name}': var(--${variableName})`
            )
            .join(',\n\t')}\n);`
      )
      .join('\n');

    return content;
  }
});

StyleDictionaryPackage.registerFormat({
  name: 'typescript',
  formatter: (dictionary) => {
    const designTokens = getDesignTokensByCategory(dictionary.allProperties);
    let content = '';

    content += Object.entries(designTokens)
      .map(
        ([name, values]) =>
          `export const ${name}NameList = [${values
            .map(({ name }) => `'${name}'`)
            .join(', ')}] as const;`
      )
      .join('\n');

    content += '\n\n';

    content += Object.entries(designTokens)
      .map(
        ([name]) =>
          `export type ${capitalize(
            name
          )}Type = typeof ${name}NameList[number];`
      )
      .join('\n');

    content += '\n\n';

    content += Object.entries(designTokens)
      .map(
        ([name, values]) =>
          `export const ${camelCase(name)}VariableList = {${values
            .map(({ path, value }) => `'${path}': '${value}'`)
            .join(', ')}};`
      )
      .join('\n');

    return content;
  }
});

module.exports = {
  source: ['**/*.tokens.json'],
  platforms: {
    'scss/designToken': {
      buildPath: './src/styles/',
      files: [
        {
          destination: '_designTokens.scss',
          format: 'scss/variables',
          options: {
            outputReferences: true
          }
        }
      ]
    },
    ts: {
      buildPath: './src/',
      files: [
        {
          destination: 'types/designTokens.ts',
          format: 'typescript',
          options: {
            outputReferences: true
          }
        }
      ]
    }
  }
};
