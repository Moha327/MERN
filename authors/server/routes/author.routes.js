const authorcontroller = require('../controllers/author.controller');
module.exports = function(app){
    app.get('/api', authorcontroller.index);
    app.get('/api/authors', authorcontroller.getAllAuthors);
    app.post('/api/authors', authorcontroller.createAuthor);
    app.get('/api/authors/:id', authorcontroller.getAuthor);
    app.put('/api/updateauthors/:id', authorcontroller.updateAuthor);
    app.delete('/api/authors/:id', authorcontroller.deleteAuthor);
}