const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// //var id = '5a06a7d55a611611041e855f';
// //var id = '6a06a7d55a611611041e855f';        // tweak the id by changing one character
// var id = '5a06a7d55a611611041e855f11';        // tweak the id by adding 11

// if(!ObjectID.isValid(id)){
//     console.log('ID is not valid');
// }

// // Todo.find({                 //Will return array of values
// //     _id: id
// // }).then((todos) => {
// //     console.log('Todos', todos);
// // });

// // Todo.findOne({              //Will return atmost 1 value
// //     _id: id
// //     //completed: false      // different property to find data
// // }).then((todo) => {
// //     console.log('Todo', todo);
// // });

// Todo.findById(id).then((todo) => {
//     if(!todo) {                             // Handle incorrect id
//         console.log('Not find Id');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

//--Challenge--

var id = '5a06a356c91dd5241ce60154';
if(!ObjectID.isValid(id)) {
    console.log('Enter Valid Id');
}

User.findById(id).then((user) => {
    if(!user) {
        console.log('Id not Found');
    }
    console.log('User By Id ', user);
}).catch((e) => console.log(e));