module.exports = () => {
  const checks = [];
  checks.push("npx ng lint -- --fix");
  checks.push("npx tsc -p tsconfig.json");
  return checks;
};
