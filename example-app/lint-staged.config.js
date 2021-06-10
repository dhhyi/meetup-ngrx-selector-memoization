module.exports = () => {
  const checks = [];
  checks.push("npx tsc -p tsconfig.json");
  return checks;
};
