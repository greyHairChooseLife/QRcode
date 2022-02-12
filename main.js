require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('./front'));
app.use(cors());

const accountsRouter = require('./routers/accountsRouter.js');
const itemsRouter = require('./routers/itemsRouter.js');
const customerRouter = require('./routers/customerRouter.js');
app.use('/accounts', accountsRouter);
app.use('/items', itemsRouter);
app.use('/customer', customerRouter);

app.get('/', (req,res) => {
	return res.redirect('/scatter');
})

app.get('/scatter', (req,res) => {
	//res.send('backEnd okay');
	return res.json({name: 'sangyeon kim'});
})
app.post('/harvest', (req,res) => {
	//res.send('backEnd okay');
	const body = req.body;
	console.log(body);
	//res.json({a:'xxx'});
	return res.json(body);
})
const port = 5000;
app.listen(port, () => console.log(`connection success with ${port}`));

