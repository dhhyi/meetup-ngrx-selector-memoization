module.exports = (allStagedFiles) => {
  const checks = [];
  if (allStagedFiles.length > 0) {
    checks.push("prettier --write .");
  }
  console.log("running", checks);
  return checks;
};
