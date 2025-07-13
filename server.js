const express = require('express')
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views", "index.html"));
});

app.get('/sugestao', (req, res) => {
  const { nome, ingredientes } = req.query
  res.status(200).send(`
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <title>Obrigado!</title>
    <style>
      body {
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: larger;
        text-shadow: 1px 1px 1px #888888;
        background-color: rgb(255, 255, 242);
        color: #451531;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px;
      }

      .agradecimento {
        background-color: rgb(100, 183, 204);
        padding: 30px 40px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        text-align: center;
        color: white;
      }

      .agradecimento h1 {
        color: #e2dadcff;
        margin-bottom: 15px;
      }

      a {
        margin-top: 20px;
        display: inline-block;
        text-decoration: none;
        color: white;
        background-color: #B3093F;
        padding: 10px 20px;
        border-radius: 6px;
        transition: background-color 0.3s;
      }

      a:hover {
        background-color: #B3093F;
      }
    </style>
  </head>
  <body>
    <div class="agradecimento">
      <h1>Obrigada pela sugestão, ${nome}!</h1>
      <p><strong>Ingredientes sugeridos:</strong> ${ingredientes}</p>
      <a href="/">Voltar para o início</a>
    </div>
  </body>
  </html>
`);
})

app.use(express.urlencoded({ extended: true }));

app.get('/contato.html', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views", "contato.html"));
});

app.post('/contato', (req, res) => {
  const { nome, email, assunto, mensagem } = req.body
  res.status(200).send(`
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <title>Contato Recebido</title>
    <style>
      body {
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: larger;
        text-shadow: 1px 1px 1px #888888;
        background-color: rgb(255, 255, 242);
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px;
      }

      .mensagem {
        background-color: rgb(100, 183, 204);
        padding: 30px 40px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        text-align: center;
        max-width: 500px;
      }

      .mensagem h1 {
        color: #e2dadcff;
        margin-bottom: 15px;
      }

      .mensagem p {
        margin: 5px 0;
      }

      a {
        margin-top: 20px;
        display: inline-block;
        text-decoration: none;
        color: white;
        background-color: #B3093F;
        padding: 10px 20px;
        border-radius: 6px;
        transition: background-color 0.3s;
      }

      form button:hover {
        background-color: #451531;
      }
    </style>
  </head>
  <body>
    <div class="mensagem">
      <h1>Mensagem Recebida</h1>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Assunto:</strong> ${assunto}</p>
      <p><strong>Mensagem:</strong> ${mensagem}</p>
      <a href="/">Voltar ao início</a>
    </div>
  </body>
  </html>
`);
})

app.get('/api/lanches', (req, res) => {
  console.log("Acessaram /api/lanches");
  const filePath = path.join(__dirname, 'public', 'data', 'lanches.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Erro ao ler o arquivo de lanches:", err);
      return res.status(500).json({ erro: "Erro interno no servidor" });
    }

    const lanches = JSON.parse(data);
    res.status(200).json(lanches);
  });
});

// middleware 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});