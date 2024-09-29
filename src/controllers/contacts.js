const mongodb = require('../DB/connection');

const getAllContacts = async (req, res) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
}

module.exports = {
  pierceRoute,
  maceyRoute,
  emmaRoute,
};