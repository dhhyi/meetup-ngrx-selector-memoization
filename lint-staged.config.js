const micromatch = require("micromatch");
const prettier = require("prettier");

const prettierSupportedExtensions = prettier
  .getSupportInfo()
  .languages.map(({ extensions }) => extensions)
  .flat();

console.log(prettierSupportedExtensions);

const addQuotes = (a) => `"${a}"`;

module.exports = (allStagedFiles) => {
  const prettierFiles = micromatch(
    allStagedFiles,
    prettierSupportedExtensions.map((extension) => `**/*${extension}`)
  );
  return prettierFiles.length > 0
    ? [`prettier --write ${prettierFiles.map(addQuotes).join(" ")}`]
    : [];
};
