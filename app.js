const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const pagesRoute = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next)=>{
    next();
});

app.use(pagesRoute);

const port = process.env.PORT || 3000
app.listen(port);