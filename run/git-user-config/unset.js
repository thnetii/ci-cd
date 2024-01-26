const { exec } = require("@actions/exec");

const inputs = require("./readInputs");

const main = async () => {
  const configArgs = ["config"];
  const useGlobal = inputs["config-global"];
  if (useGlobal) {
    configArgs.push("--global");
  }
  configArgs.push("--unset");
  /** @type {import('@actions/exec').ExecOptions} */
  const opts = { cwd: inputs["working-directory"] };
  await exec("git", [...configArgs, "user.name"], opts);
  await exec("git", [...configArgs, "user.email"], opts);
};

main();
