var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// let db = {
//     localhost: 'mongodb://localhost:27017/ToApp',
//     mlab: 'mongodb://mlab:123456@ds157475.mlab.com:57475/localmongodatabase'
//   };
//   mongoose.connect( '',{
//       useMongoClient: true
//   }) ;
  
mongoose.connect( process.env.MONGODB_URI,{
          useMongoClient: true
      }) ;
  
 // mongoose.connect(( db.localhost || db.mlab), {
//mongoose.connect('mongodb://mlab:123456@ds157475.mlab.com:57475/localmongodatabase' || 'mongodb://localhost:27017/ToApp'
//     useMongoClient: true
// });