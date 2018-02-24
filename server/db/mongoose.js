var mongoose = require('mongoose');

// Avisando o mongoose que o Promise que vamos usar é o nativo do JS
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
