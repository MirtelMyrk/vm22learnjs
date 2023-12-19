const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
nunjucks.configure('ylessanne/views', {
    autoescape: true,
    express: app
});
app.use(express.urlencoded ());

function calcHypotenuse(a, b) {
    return Math.sqrt(a * a + b * b);
  }

app.get('/', function (req, res) {
    let name = req.query.name;
    let age = req.query.age;
    res.render('index.njk', {name, age});
});

app.post('/answer', function (req, res) {
    let name = req.body.name;
    let age = req.body.age;
    res.render('answer.njk', {name, age});
});

app.get('/about', function (req, res) {
    res.render('about.njk');
});

app.get('/calc', function (req, res) {
    res.render('calc.njk');
});

app.post('/a', function (req, res) {
    let a = req.body.a;
    let b = req.body.b;
    let c = calcHypotenuse(a, b);
    res.render('a.njk', { a, b, c });
});

app.listen(3000);
console.log('Server stared on http://localhost:3000');
