const fs = require("fs");
const Reader = require("./../../lib/utils/reader");

describe("Unit test for Reader class", () => {
    test("Read json file", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        expect(explorers).not.toBe(false);
    });
});