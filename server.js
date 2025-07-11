const express = require('express')
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get('/sugestao', (req, res) => {
  const {nome, ingredientes} = req.query
  res.send(`<h1>Obrigada pela sugestão, ${nome}!</h1> <p>Ingredientes: ${ingredientes}</p> <p><a href="/">Voltar para o início</a></p>`)
})

// Middleware 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});