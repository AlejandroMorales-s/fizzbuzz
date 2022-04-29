const Reader = require('./../utils/reader');
const ExplorerService = require('./../services/explorerService');
const FizzbuzzService = require('./../services/fizzbuzzService');

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNode = ExplorerService.filterByMission(explorers, mission);
        return explorersInNode;
    }
    static getExplorersUsernameByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const usernamesInNode = ExplorerService.getExporersUsernameByMission(explorers, mission);
        return usernamesInNode;
    }
    static getExplorersAmountByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const amountOfExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return amountOfExplorersInNode;
    }
    static applyValidationInNumber(number) {
        const result = FizzbuzzService.applyValidationInNumber(number);
        return result; 
    }
}

module.exports = ExplorerController;