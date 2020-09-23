const test = require("ava");
const fixBuffer = require("./index");

test("working on simple JSON serialized objects", async t => {
    const size = 100;
    const nums = new Uint8Array(size)
    for (let i = 0; i < size; i++) nums[i] = Math.round(Math.random() * 100);
    const buffer = Buffer.from(nums);
    const obj = JSON.parse(JSON.stringify(buffer));
    t.false(Buffer.isBuffer(obj));
    const reconstructed = fixBuffer(obj);
    t.true(Buffer.isBuffer(reconstructed));
    t.deepEqual(nums, Uint8Array.from(reconstructed));
});
