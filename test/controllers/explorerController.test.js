const ExplorerController = require('./../../lib/controllers/explorerController');

describe('Prueba de unidad de la clase ExplorerController', () => {
    test('Debe retornar un arreglo de exploradores', () => {
        const explorers = ExplorerController.getExplorersByMission('node');
        expect(explorers[0].mission).toBe('node');
    });
    test('Debe retornar un arreglo de exploradores', () => {
        const explorers = ExplorerController.getExplorersUsernameByMission('node');
        expect(Array.isArray(explorers)).toBe(true);
        expect(explorers[0]).toBe('ajolonauta1');
    });
    test('Debe retornar un arreglo de exploradores en mision node', () => {
        const explorers = ExplorerController.getExplorersAmountByMission('node');
        expect(explorers).toBe(10);
    });
})