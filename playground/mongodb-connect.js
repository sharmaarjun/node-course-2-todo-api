//const MongoClient = require('mongodb').MongoClient; // -- Destructuring
const {MongoClient, ObjectID} = require ('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Arjun', age: 24};
// var {name} = user;      //name that we want and from where do we want
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if (err){
        return console.log('Unable to connect to Mongodb Server');
    }
    console.log('Connected to Mongodb Server');

    // db.collection('Todos').insertOne({
    //     text: 'Something Todo',
    //     completed: false
    // }, (err,result) => {
    //     if (err){
    //         return console.log('Unable to insert',err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({

    //     name: 'Arjun',
    //     age: 24,
    //     location: 'Chandigarh'
    // }, (err, result) => {
    //     if (err){
    //         return console.log('Unable to insert', err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});