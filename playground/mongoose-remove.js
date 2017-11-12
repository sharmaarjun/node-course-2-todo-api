const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.findByIdAndRemove('5a06aa24847e133d60b60591').then((doc) => {
    if (doc === null){
       return console.log('Already deleted');
    }
    console.log('Deleted the ID', doc);
});