const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello node.js'));
app.get('/welcome', (req, res) => {
    var user_name = req.param('name');
    res.send('welcome ['+ user_name +']');
});
app.get('/check', (req, res) => res.send('check_page'));
app.listen(port, () => console.log('Example app listening on port 3000'))