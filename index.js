const express = require("express");
const PORT = 3000;
const app = express();
const morgan = require("morgan");

// configurações iniciais
app.use(express.json());
morgan.token("body", (req) => {
  return JSON.stringify(req.body);
});
app.use(morgan(":method :url :status :response-time ms :body"));

app.get("/", (req, res) => {
  res.json({ status: "Endpoint Locadora API" });
});

app.listen(PORT, () => {
  console.log("Locadora API");
  console.log(`Endereco: http://localhost:${PORT}`);
});
