const ExplorerController = require('./controllers/explorerController');
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
app.get("/", (req, res) => {
    res.json({message: "FizzBuzz Api welcome!"});
});
app.get("/v1/explorers/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorers = ExplorerController.getExplorersByMission(mission);
    res.json(explorers);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
