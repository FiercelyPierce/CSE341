const routes = require('express').Router();
const contactController = require('../controllers/contact');

routes.get('/', contactController.getAllContacts);

module.exports = routes;