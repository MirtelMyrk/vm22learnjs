const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
nunjucks.configure('ylessanne/views', {
    autoescape: true,
    express: app
});
app.use(express.urlencoded ());

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

app.listen(3000);
console.log('Server stared on http://localhost:3000');
