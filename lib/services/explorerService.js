const Reader = require("../utils/reader");
const explorers = Reader.readJsonFile("explorers.json");

class ExplorerService {
    static filterByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission);
    }
    static getAmountOfExplorersByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission).length;
    }
    static getExporersUsernameByMission(explorers, mission){
        let explorersUsername = explorers.filter((explorer) => explorer.mission == mission);
        return explorersUsername.map((explorer) => explorer.githubUsername);
    }
}

module.exports = ExplorerService;