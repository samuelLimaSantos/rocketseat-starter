const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o app
const app = express();

// Configurando o app para mandar json
app.use(express.json());
app.use(cors());
// Iniciando o DB
mongoose.connect("mongodb://192.168.99.100:27017/nodeapi", {
  useNewUrlParser: true,
});

requireDir("./src/models");

// Rotas
app.use("/api", require("./src/routes"));

// Criação da porta
app.listen(3001);
