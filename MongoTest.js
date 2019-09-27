const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://akysu:<trinhkhanh>@aks01-ghsgg.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect((err, client) => {
    if (err) console.log(err)
    else {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        client.close();
    }
   });