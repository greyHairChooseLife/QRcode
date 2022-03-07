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
const clerkRouter = require('./routers/clerkRouter.js');
app.use('/accounts', accountsRouter);
app.use('/items', itemsRouter);
app.use('/customer', customerRouter);
app.use('/clerk', clerkRouter);
app.get('/', (req, res) => {
	res.send('ok');
})

const port = 5000;
app.listen(port, () => console.log(`connection success with ${port}`));

