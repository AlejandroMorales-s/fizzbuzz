const Reader = require("./../utils/reader");
const ExplorerService = require("./../services/explorerService");
const FizzbuzzService = require("./../services/fizzbuzzService");

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
    static getExplorersNameByMission(mission) {
        let list = [];
        const explorers = Reader.readJsonFile("explorers.json");
        const names = ExplorerService.getExporersNameByMission(explorers, mission);
        for (var i=0; i < names.length; i++) { //* Agrega espacio entre elementos del array
            list.push(" " + names[i]);
        }
        return kd;
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
    static botApplyValidationInInput(msg, bot) {
        const chatId = msg.chat.id;
        const numberToApplyFb = msg.text;
        
        if(!isNaN(numberToApplyFb)) {
            const fizzbuzzTrick = ExplorerController.applyValidationInNumber(numberToApplyFb);
            const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
            bot.sendMessage(chatId, responseBot);
        } else if (isNaN(numberToApplyFb)) {
            ExplorerController.botApplyValidationInString(chatId, bot, numberToApplyFb);
        } else {
            bot.sendMessage(chatId, "Envía un número válido");
        }
    }
    static botApplyValidationInString(chatId, bot, string) {
        if(string === "node") {
            const missionNames = ExplorerController.getExplorersNameByMission(string);
            const responseBot = `Los explorers en ${string} son: ${missionNames}`;
            bot.sendMessage(chatId, responseBot);
        } else if (string === "java") {
            const missionNames = ExplorerController.getExplorersNameByMission(string);
            const responseBot = `Los explorers en ${string} son: ${missionNames}`;
            bot.sendMessage(chatId, responseBot);
        } else {
            bot.sendMessage(chatId, "Envía una mision valida");
        }
    }
}

module.exports = ExplorerController;