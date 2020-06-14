const express = require('express');

const app = express();

app.get('/', (req, res) => {
	return res.send('Servidor Simples');
});

const PORT = 3333;

app.listen(PORT, () => {
	console.log('SERVER:', 'RODANDO NA PORTA ' + PORT);
});
