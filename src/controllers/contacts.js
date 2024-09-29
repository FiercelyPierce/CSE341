const mongodb = require('../DB/connection');

const getAllContacts = async (req, res) => {
  const result = await mongodb.getDb().db('contacts').collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
}

const getContactById = async (req, res) => {
  const result = await mongodb.getDb().db('contacts').collection('contacts').findOne({id: req.params.id});
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(result);
}

module.exports = {
  getAllContacts,
  getContactById,
};