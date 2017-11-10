const {MongoClient, ObjectID} = require ('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if (err){
        return console.log('Unable to connect to Mongodb Server');
    }
    console.log('Connected to Mongodb Server');

// db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID("5a03c7623dbdcb446563c619")
// }, {
//     $set: {
//         completed: false
//     }
// }, {
//     returnOriginal: false
// }).then((result) => {
//     console.log(result);
// });

// --updateNameAnd Inc Age--

db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5a026546ab006c1f34bae65e")
}, {
    $set: {
        name: 'Stone Cold'
    }, $inc: {
        age: 10
    }
}, {
    returnOriginal: false
}).then((result) => {
    console.log(result);
});

 //   db.close();
});