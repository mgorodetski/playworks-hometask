const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("static-website"));
app.use('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/static-website/index.html'));
});

app.listen(port, () => {
    console.log("server is running on "+port);
})