const router = require('express').Router();
const contactController = require('../controllers/contacts');

router.get('/', contactController.getAllContacts);
router.get('/:_id', contactController.getContactById);

router.post('/', contactController.createContact);

router.put('/:_id', contactController.updateContact);

router.delete('/:_id', contactController.deleteContact);

module.exports = router;