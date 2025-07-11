const express = require('express')
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello World!");
});

// Middleware 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});