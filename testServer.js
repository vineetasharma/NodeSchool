var bodyParser=require('body-parser');
var app = new (require('express'))();
var soundCloud=require('SoundCloud_Node_API')('9bb9626b7a02af589bdfadc9e8f06de1');
var port = 3000;



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())
app.get("/", function(req, res) {
   /* soundCloud.user.getUserFollowings(3207,function(err,data){
        //console.log('Got Dtata---------------All getUserFollowings-------------',data,err);
    });
    soundCloud.user.getUserFollowers(3207,function(err,data){
       //console.log('Got Dtata---------------All getUserFollowers-------------',data,err);
    })
    soundCloud.user.getUserDetails(3207,function(err,data){
       //console.log('Got Dtata---------------All getUserDetails-------------',data,err);
    })
    soundCloud.user.getUserFavorites(3207,function(err,data){
       //console.log('Got Dtata---------------All getUserFavorites-------------',data,err);
    })
    soundCloud.user.getUserGroups(3207,function(err,data){
       //console.log('Got Dtata---------------All getUserGroups-------------',data,err);
    })*/
    soundCloud.tracks.getFavoritersOfTrack(1111,function(err,data){
       console.log('Got Dtata---------------getFavoritersOfTrack 1315865,-------------',data,err);
    })
    /*request.get('http://api.soundcloud.com/users/3207?client_id=9bb9626b7a02af589bdfadc9e8f06de1',function(err,data,body){
        console.log('Got Dtata----------------------------',body,err);
    });*/
    //res.sendFile(__dirname + '/index.html')
})

app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
})
