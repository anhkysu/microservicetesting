var Seneca  = require("seneca");
var Express = require("express");
var Web     = require("seneca-web");

var seneca = Seneca();
var server = Express();

var config = {
    routes:{
        prefix : "/my-api",
        pin: "role:api,cmd:*",
        map:{
            bazinga: {
                GET: true
            },
            baza: {
                GET: true
            },
        }
    }
};

seneca.use(Web, { adapter: require('seneca-web-adapter-express'), context: server });
seneca.act("role:web", config);
seneca.add("role:api,cmd:bazinga", bazinga);
seneca.add("role:api,cmd:baza", baza);

server.listen(3000);

function bazinga(args, done){
    done(null, {
        bar: "Bazinga!"
    });
}

function baza(args, done){
    done(null, {
        bar: "Baza!"
    });
}