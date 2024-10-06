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

const createContact = async (req, res) => {
  const contact = req.body;
  const result = await mongodb.getDb().db('contacts').collection('contacts').insertOne(contact);
  res.setHeader('Content-Type', 'application/json');
  res.status(201).json({
    message: 'Contact created successfully',
    contact: contact,
    result: result
  });
}

const updateContact = async (req, res) => {
  const contact = req.body;
  const result = await mongodb.getDb().db('contacts').collection('contacts').updateOne({id: req.params.id}, {$set: contact});
  res.setHeader('Content-Type', 'application/json');
  res.status(204).json({
    message: 'Contact updated successfully',
    contact: contact,
    result: result
  });
}

const deleteContact = async (req, res) => {
  const result = await mongodb.getDb().db('contacts').collection('contacts').deleteOne({id: req.params.id});
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    message: 'Contact deleted successfully',
    result: result
  });
}

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
};