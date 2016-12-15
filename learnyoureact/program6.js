/**
 * Created by ttnd on 21/11/16.
 */

var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/register')({
    ignore: false
});

var data = [{title:"Shopping",detail:process.argv[3]},{title:"Hair cut",detail:process.argv[4]}];

app.use('/', function(req, res) {
    res.render('view6', {data: data});
});

app.listen(app.get('port'), function() {});

