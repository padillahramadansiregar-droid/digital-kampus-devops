const test = require("node:test");
const assert = require("node:assert");
const { getStatus } = require("./app");

test("status aplikasi harus ok", () => {
  assert.strictEqual(getStatus().status, "ok");
});
