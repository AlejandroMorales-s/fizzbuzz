const Reader = require("./../../lib/utils/reader");
const explorers = Reader.readJsonFile("explorers.json");
const ExplorerService = require("./../../lib/services/explorerService");

describe("Unit test for ExplorerService class", () => {

    test("Filter explorers in node mission", () => {
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode[0].mission).toBe("node");
    });

    test("Get amount of explorers by mission", () => {
        const amountOfExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(amountOfExplorersInNode).toBe(10);
    });

    test("Get explorers username by mission", () => {
        const usernamesInNode = ExplorerService.getExporersUsernameByMission(explorers, "node");
        expect(usernamesInNode[0]).toBe("ajolonauta1");
    });
});