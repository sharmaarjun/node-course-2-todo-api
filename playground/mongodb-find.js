//const MongoClient = require('mongodb').MongoClient; // -- Destructuring
const {MongoClient, ObjectID} = require ('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if (err){
        return console.log('Unable to connect to Mongodb Server');
    }
    console.log('Connected to Mongodb Server');


   // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    // db.collection('Todos').find({
    //     _id: new ObjectID('5a02607f45830a241c51a1e8') }).toArray().then((docs) => {         // id is objectId so we use objectId
    //         console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Error to fetch Todos", err);
    // });

    //--> Count the items in todos-->

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log("Error to fetch Todos", err);
    // });

    db.collection('Users').find({name: 'Arjun'}).count().then((count) => {
        console.log(`Users count: ${count}`);
    }, (err) => {
        console.log("Error to fetch Users", err);
    });


 //   db.close();
});