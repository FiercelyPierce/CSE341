const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./DB/connection');
const contactRoutes = require('./routes/contacts');

const port = process.env.PORT || 8080;
const app = express();

app.use('/', require('./routes'));

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/contacts', contactRoutes);

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});