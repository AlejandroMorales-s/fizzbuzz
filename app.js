const fs = require("fs");
const Reader = require("./lib/utils/reader");
const ExplorerService = require("./lib/services/explorerService");
const FizzbuzzService = require("./lib/services/fizzbuzzService");

//* Part 1 Read json file ===========================
const explorers = Reader.readJsonFile("explorers.json");
//console.log(explorers); 

//* Part 2: Get the quantity of explorers names in node
const explorersInNode = ExplorerService.filterByMission(explorers, "node");
//console.log(explorersInNode)

//* Part 3: Get the amount of explorers by mission
const amountOfExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
//console.log(amountOfExplorersInNode); 

//* Part4: Get the explorer's usernames in Node
const usernamesInNode = ExplorerService.getExporersUsernameByMission(explorers, "node");
//console.log(usernamesInNode)

//* DEAD CODE: Part 5,6,7, please remove this and go to Part 8!

//* Part 8: Get a list of the explorers in node, if the score is divisible by 5 and 3, set the property trick and the value FIZZBUZZ, if is just divisible by 5 set the property trcik and the value BUZZ, if is just divisible by 3 set the property trick and the value FIZZ, otherwise set the property trick and the score value. TODO

const trick = explorersInNode.map((explorer) => {
    FizzbuzzService.applyValidationInExplorer(explorer);
    //console.log(explorer);
});