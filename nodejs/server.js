const express = require("express");

const app = express();

app.use(express.json()); // Configurando o express para aceitar formato json

app.get("/", (request, response) => {
    
    
    return response.json({ message: "Hello Rocketseat"});
});










app.listen(3001);