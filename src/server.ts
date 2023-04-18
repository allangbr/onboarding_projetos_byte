//Importações
import bodyParser = require("body-parser");
import express = require("express");
import cors = require("cors");
import { routes } from "./routes";

//Criando Aplicação Express
const app = express();

//Utilizando o bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Utilizando o cors
app.use(cors);

//Settando as rotas do server
app.use(routes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running in port 3000!")
})



