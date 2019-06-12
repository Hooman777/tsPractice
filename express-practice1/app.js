const express = require('express');
const Joi = require('joi');
const path = require('path');

const app = express();
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.use(express.static('./public'));


let products = [{id:1, name: 'water', description: 'Nestle waters'},
{id:2, name: 'banana', description: 'Ecuadorian banana'},
{id:3, name: 'date', description: 'Iranian date'}];

app.use('/', (req, res, next) => {
    // res.send(`<h1>Welcome to our shop.</h1>`);
    next();
});
app.get('/', (req, res) => {
    // res.sendFile('public/html/index.html', {root:__dirname});
    res.render('index');
});

app.get('/api/products/:id', (req,res) => {
    const _id = parseInt(req.params.id);
    const product = products.find(prd => prd.id === _id);
    if (!product) return res.status(404).send(`Error in finding the product!`);
    res.send(product);
});

app.post('/api/products', (req, res) => {

    const error = checkRequestErr(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const product = {
        id: products.length +1,
        name: req.body.name,
        description: req.body.description
    };
    products.push(product);
    res.send(product);
});

app.put('/api/products/:id', (req, res) => {
    const _id = parseInt(req.params.id);
    const product = products.find(prd => prd.id === _id);
    if (!product) return res.status(404).send(`Error in finding the product!`);

    const error = checkRequestErr(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    product.name = req.body.name;
    product.description = req.body.description;

    res.send(product);
});

app.delete('/api/products/:id', (req, res) => {
    const _id = parseInt(req.params.id);
    const product = products.find(prd => prd.id === _id);
    if (!product) return res.status(404).send(`Error in finding the product!`);

    const index = products.indexOf(product);
    products.splice(index, 1);
    res.send(product);
});

const checkRequestErr = function(input) {
    const schema = {
        name: Joi.string().min(3).required(),
        description: Joi.string().min(7).optional()
    };
    const result = Joi.validate(input, schema);
    return result.error;
}

const port = process.env.PORT || 3500;
app.listen(port, () => {console.log('Listening on port 3500...')});