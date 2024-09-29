const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.pierceRoute);
routes.get('/macey', lesson1Controller.maceyRoute);
routes.get('/emma', lesson1Controller.emmaRoute);

module.exports = routes;