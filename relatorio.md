<sup>Esse é um feedback gerado por IA, ele pode conter erros.</sup>

Você tem 9 créditos restantes para usar o sistema de feedback AI.

# Feedback para edimhelena:

Nota final: **24.9/100**

# Feedback para Edimhelena 🚀

Olá, Edimhelena! 😊 Primeiro de tudo, quero parabenizá-la pelo esforço que você colocou neste desafio! Mesmo com alguns pontos a melhorar, você já fez algumas conquistas que merecem ser celebradas. 🎉

## Conquistas Bônus
Uma das suas vitórias foi a criação de um template para a página 404, que inclui uma âncora para a rota raiz. Isso mostra que você está pensando na experiência do usuário! Muito bem! 👏

## Analisando o Código
Agora, vamos dar uma olhada nos pontos que precisam de atenção. A partir do que vi no seu código, alguns requisitos não foram atendidos, e vamos explorar a raiz desses problemas.

### 1. A Rota `/contato` Não Existe
Percebi que muitos requisitos da página de contato não funcionaram. Isso acontece porque a rota `app.get('/contato', ...)` ainda não foi criada. Esse é o primeiro passo! Vamos criá-la juntos? 

Aqui está um exemplo simples de como você pode implementar isso:

```javascript
app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contato.html'));
});
```

### 2. Formulário na Rota `/`
Outro ponto importante é que a rota `/` deve conter um formulário. Atualmente, você só está enviando "Hello World!". Para atender aos requisitos, seu código precisa incluir um formulário que tenha pelo menos dois campos de input e um botão de submit. Aqui está um exemplo básico de como isso poderia ser:

```html
<form action="/sugestao" method="GET">
    <input type="text" name="nome" placeholder="Seu Nome" required>
    <input type="text" name="ingredientes" placeholder="Ingredientes" required>
    <button type="submit">Enviar</button>
</form>
```

### 3. Rota `/sugestao`
A rota `/sugestao` também não foi implementada. Você precisará adicionar algo assim:

```javascript
app.get('/sugestao', (req, res) => {
    const { nome, ingredientes } = req.query;
    res.send(`<h1>Obrigado, ${nome}!</h1><p>Ingredientes: ${ingredientes}</p>`);
});
```

### 4. Rota `/api/lanches`
Além disso, a rota `/api/lanches` não foi criada e é necessária para retornar um array de lanches. Uma implementação simples pode ser:

```javascript
app.get('/api/lanches', (req, res) => {
    const lanches = [
        { id: 1, nome: 'Hambúrguer', ingredientes: 'Carne, Pão, Queijo' },
        { id: 2, nome: 'Batata Frita', ingredientes: 'Batata, Sal' },
        { id: 3, nome: 'Refrigerante', ingredientes: 'Água, Gás, Açúcar' }
    ];
    res.json(lanches);
});
```

### 5. Validando os Inputs
Finalmente, não se esqueça de que os campos de input devem ter os atributos `name` corretos, conforme os requisitos. Isso é fundamental para que os dados sejam enviados corretamente.

## Análise Geral
Edimhelena, você já tem uma boa base e algumas ideias funcionais no seu código! 💪 O próximo passo é implementar as rotas e o formulário que atendem a todos os requisitos apresentados. Lembre-se, cada erro é uma oportunidade de aprendizado e você está no caminho certo! 

Continue praticando e não hesite em fazer perguntas! Estou aqui para ajudar você. 😊 Boa sorte e vamos em frente! 🚀