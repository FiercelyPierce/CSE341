const helloRoute = (req, res) => {
  res.send("Hello Pierce");
}

const goodbyeRoute = (req, res) => {
  res.send("Goodbye Pierce");
}

module.exports = {
  helloRoute,
  goodbyeRoute
};