const express = require('express');
const PORT = process.env.port || 9000;
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>App is working! Now with Nodemon!</h1>');
});

app.get('/test-route', (req, res) => {
    res.send('<h1>This is a test route!</h1>');
});

app.get('/api/get-user', (req, res) => {
    res.send({ username: 'Bob1234', email: 'bob@email.com', name: 'Bob' });
});

app.get('/api/get-articles', (req, res) => {
    res.send(['article-1', 'article-2', 'article-3']);
});

app.listen(PORT, () => {
    console.log('app running on port:' + PORT);
});


