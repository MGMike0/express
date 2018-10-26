const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.get('/', async  (req, res) => {
	res.send('Voy a explotar perros');
});

app.listen(port);


/*cambiar puerto, engines en json  y script de start*/