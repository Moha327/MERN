const JokeController = require('../controllers/jokes.controllers');
 
module.exports = app => {
    app.get('/api/jokes', JokeController.findAllUsers);
    app.get('/api/jokes/:id', JokeController.findOneSingleUser);
    app.put('/api/jokes/:id', JokeController.updateExistingUser);
  app.post('/api/jokes', JokeController.createNewUser);
//     app.delete('/api/users/:id', UserController.deleteAnExistingUser);
 }