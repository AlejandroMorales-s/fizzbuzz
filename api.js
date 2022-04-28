const fs = require("fs");
const ExplorerService = require("./lib/services/explorerService");
const Reader = require("./lib/utils/reader");
const FizzbuzzApiService = require("./lib/services/fizzbuzzApiService");
const explorers = Reader.readJsonFile("explorers.json");
// Usando objeto express
const express = require("express");
// App de Express
const app = express();
// Puerto en que vamos a ver nuestra app: localhost: 3000
const port = 3000;
// path inicial, responderá a la url localhost: 3000
app.get("/", (req, res) => {
    res.send("Hello !");
});
app.get("/v1/explorers/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersInNode = ExplorerService.filterByMission(explorers, mission);
    res.send(explorersInNode);
});
app.get("/v1/explorers/amount/:mission", (req, res) => {
    const mission = req.params.mission;
    const amountOfExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    res.send(amountOfExplorersInNode);
});
app.get("/v1/explorers/usernames/:mission", (req, res) => {
    const mission = req.params.mission;
    const usernamesInNode = ExplorerService.getExporersUsernameByMission(explorers, mission);
    res.send(usernamesInNode);
});
app.get("/v1/explorers/trick/:number", (req, res) => {
    const number = req.params.number;
    const trick = FizzbuzzApiService.applyValidationInExplorer(number);
    res.send(trick);
});
// Con esto inicializamos esta app
app.listen (port, () => {
    console.log(`Example app listening on port ${port}`);
});
