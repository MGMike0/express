const express = require('express');

const app = express();

app.get('/', async  (req, res) => {
	res.send('Voy a explotar perros');
});

app.listen(3000);