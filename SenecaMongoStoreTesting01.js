const seneca = require('seneca')();
seneca.use('entity');
seneca.use('mongo-store', {
  name: 'seneca',
  host: '127.0.0.1',
  port: 27017
});

seneca.ready((err) => {
  if(err){
      return console.log("Failed");
  }
  var apple = seneca.make$('fruit')
  apple.name  = 'Pink Lady'
  apple.price = 0.99
  apple.save$((err,apple) => {
    console.log( "apple.id = "+apple.id  )
  });
});