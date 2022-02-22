const express = require('express');
const http = require('http');
const path = require('path');
// const comperssion = require('comperssion');

const app = express();

// app.use(comperssion());

app.use(express.static(path.join(__dirname + '/dist/project_lab')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/project_lab/index.html'));
});

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`server started ${port}`));
