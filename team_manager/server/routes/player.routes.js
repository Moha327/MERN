const PLayerController = require('../controllers/player.controllers');
module.exports = function(app){
    app.get('/api/players', PLayerController.getPlayers);
    app.post('/api/addplayers', PLayerController.createPlayer);
    app.put('/api/updateplayers/:id', PLayerController.updatePlayer);
    app.delete('/api/deleteplayers/:id', PLayerController.deletePlayer);
}
