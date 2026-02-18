const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =process.env.DATABASE_URI ;
const dbName=process.env.DATABASE_NAME;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const dbConnect = (collectionName) => {
    try{
        return client.db(dbName).collection(collectionName)
    }
    catch(er){
        console.log(er.message)
    }
}