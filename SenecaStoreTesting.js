var seneca = require('seneca')()
seneca.use('mongo-store', {
    uri: "mongodb+srv://akysu:<trinhkhanh>@aks01-ghsgg.gcp.mongodb.net/test?retryWrites=true&w=majority"
})
.use("entity")
 
seneca.ready(function () {
  
})