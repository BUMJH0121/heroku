const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello node.js'));
app.get('/welcome', (req, res) => res.send('welcome_page'));
app.listen(port, () => console.log('Example app listening on port 3000'))