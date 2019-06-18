var express = require('express');
var app = express();

const path = require('path');
const history = require('connect-history-api-fallback');

const port = 2021;

const staticFileMiddleware = express.static(path.join(__dirname + '/public/dist/societe-generale-ui'));

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

app.use(express.static(__dirname + '/public/dist/societe-generale-ui'));

app.get('/', function(req, resp){
    resp.sendFile(__dirname + '/public/dist/societe-generale-ui/index.html');
});

app.listen(process.env.PORT || port, function () {
  console.log(`listening on *:${port}`);
});

module.exports = app;