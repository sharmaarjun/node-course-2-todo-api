var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let db = {
    localhost: 'mongodb://localhost:27017/ToApp',
    mlab: 'mongodb://sharmaarjun:arjun18793@ds157475.mlab.com:57475/localmongodatabase'
  };
  mongoose.connect( process.env.PORT ? db.mlab : db.localhost,{
      useMongoClient: true
  }) ;
  
  
 // mongoose.connect(( db.localhost || db.mlab), {
//mongoose.connect('mongodb://sharmaarjun:arjun18793@ds157475.mlab.com:57475/localmongodatabase' || 'mongodb://localhost:27017/ToApp'
//     useMongoClient: true
// });