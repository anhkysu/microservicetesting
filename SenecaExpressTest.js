var seneca = require('seneca')();
var express = require('express');
var app = express();
app.use( seneca.export('web') );

seneca.add('role:api,cmd:bazinga',function(args,done){
 done(null,{bar:"Bazinga!"});
});
seneca.act('role:web',
{
 use:{
 prefix: '/my-api',
 pin: {role:'api',cmd:'*'},
 map:{
 bazinga: {GET: true}
 }
}}

)

app.listen(3000);

