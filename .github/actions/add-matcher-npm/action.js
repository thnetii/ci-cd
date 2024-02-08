const path = require("node:path");
const { issueCommand } = require("@actions/core/lib/command");

const matcherPath = path.join(__dirname, "npm.json");
issueCommand("add-matcher", {}, matcherPath);
