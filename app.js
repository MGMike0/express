const express = require('express');
const port = process.env.PORT || 3000;
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear()	
})
hbs.registerHelper('upperCase', (text) => {
	return text.toUpperCase()	
})

app.use((req, res, next) => {
	console.log(`LOG: ${new Date().getYear()+1900}`);	
	next();
})

app.get('/', async  (req, res) => {
	res.send('DenmeChamba');
});

app.get('/about', async  (req, res) => {
	res.render('about.hbs',{
		title:'aboutsi',
		body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quisquam nulla veritatis reiciendis.Quas accusantium vitae voluptas architecto, autem veritatis beatae enim, molestias mollitia iure unde itaque dolorum minus veniam.'
		
	})
});

app.get('/contact', async  (req, res) => {
	res.render('contact.hbs',{
		title:'Contacto'
	})
});


app.listen(port);


/*cambiar puerto, engines en json  y script de start*/