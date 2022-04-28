const Reader = require("../../lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");
const ExplorerService = require("../../lib/services/explorerService");

describe("Unit test for ExplorerService class", () => {

    test("Filter explorers in node mission", () => {
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode[0].mission).toBe("node");
    });
});