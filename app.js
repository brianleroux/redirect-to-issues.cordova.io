/*var express = require('express')
,   app = module.exports = express()

app.get('/', function(req, res) {
    res.redirect('https://issues.apache.org/jira/browse/CB')
})

app.get('/:id', function(req, res) {
    res.redirect('https://issues.apache.org/jira/browse/CB-' + req.params.id)
})
*/

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
      response.send('Hello World!');
});

app.listen(process.env.PORT || 3000)
