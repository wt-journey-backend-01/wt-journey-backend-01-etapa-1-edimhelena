const express = require('express')
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "views", "index.html"));
});

app.get('/sugestao', (req, res) => {
  const {nome, ingredientes} = req.query
  res.status(200).send(`<h1>Obrigada pela sugestão, ${nome}!</h1> <p>Ingredientes: ${ingredientes}</p> <p><a href="/">Voltar para o início</a></p>`)
})

app.use(express.urlencoded({ extended: true }));

app.get('/contato.html', (req, res) =>{
  res.status(200).sendFile(path.join(__dirname, "views", "contato.html"));
});

app.post('/contato', (req, res) => {
  const {nome, email, assunto, mensagem} = req.body
  res.status(200).send(`<h1>Mensagem Recebida</h1>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Assunto:</strong> ${assunto}</p>
    <p><strong>Mensagem:</strong> ${mensagem}</p>
    <p><a href="/">Voltar ao início</a></p>`)
})

// Middleware 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});