const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conectar ao banco de dados
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Altere se necessário
  password: "", // Adicione a senha do seu banco
  database: "meubanco",
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco: ", err);
  } else {
    console.log("Conectado ao MySQL");
  }
});

// Criar rota para inserir usuário
app.post("/usuarios", (req, res) => {
  const { nome } = req.body;
  const sql = "INSERT INTO usuarios (nome) VALUES (?)";
  db.query(sql, [nome], (err, result) => {
    if (err) {
      res.status(500).send("Erro ao inserir usuário");
    } else {
      res.status(201).send("Usuário inserido com sucesso");
    }
  });
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});