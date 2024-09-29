const pierceRoute = (req, res) => {
  res.send("Pierce Cirks");
}

const maceyRoute = (req, res) => {
  res.send("Macey Cirks");
}

const emmaRoute = (req, res) => {
  res.send("Emma Seever");
}

module.exports = {
  pierceRoute,
  maceyRoute,
  emmaRoute,
};