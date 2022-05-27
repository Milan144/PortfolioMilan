const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3100;

const work = require('./routes/work');
const news = require('./routes/news');



app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);


app.get('/', (req, res) => {
    res.json({ 'message': 'ok' });
})


app.use('/work', work);
app.use('/news', news);



app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ 'message': err.message });


    return;
});

app.listen(port, () => {
    console.log(`Api lancée sur : http://localhost:${port}`)
});
