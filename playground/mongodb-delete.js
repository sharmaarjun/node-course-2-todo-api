const {MongoClient, ObjectID} = require ('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if (err){
        return console.log('Unable to connect to Mongodb Server');
    }
    console.log('Connected to Mongodb Server');

// --deleteMany--

// db.collection('Todos').deleteMany({text: 'Dekho'}).then((results) => {
//     console.log(results);
// });

// --deleteOne--

// db.collection('Todos').deleteOne({text: 'Chakk'}).then((result) => {
//     console.log(result);
// });

// --findOneAndDelete--
  
    // db.collection('Todos').findOneAndDelete({text: 'Chakk'}).then((result) =>{
    //     console.log(result);
    // });

    ////--deleting by ID--
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5a0264dc6f91650f00fbb9bd') }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

 //   db.close();
});