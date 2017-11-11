var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParser.json());

// <-- Post API -->
app.post('/todos', (req,res) => {      // Creating todos
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});
// <-- Post API -->
// app.post('/chal', (req, res) => {
//     var todo = new Todo({
//         text: req.body.text
//     });
//     todo.save().then((doc) => {
//         res.send(doc);
//     }, (e) => {
//         res.send(e);
//     })
// });

// <-- Get API -->
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Started on 3000');
});



module.exports = {app};





//--EXAMPLES-->
// var newTodo = new Todo({        // Calling like constructor
//     text: 'Cook dinner'
// });

// newTodo.save().then ((doc) => {
//     console.log('Saved Todo', doc);
// }, (e) => {
//     console.log('Unable to save todo');
// } );

// var otherTodo = new Todo({
//     text: 'Gym from next week',
//     completed: true,
//     completedAt: 13
// });

// otherTodo.save().then((doc) => {
//     console.log('Saved otherTodo', doc);
// }, (e) => {
//     console.log('Unable to save ', e);
// } );

// --validation--
// var newTodo = new Todo({
//     text: '  Edit  '
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// });

// --Model in challenge--



// var newUser = new User({
//     email: 'abc@gm.cc'
// });

// newUser.save().then((doc) => {
//     console.log('Email is saved ', doc);
// }, (e) => {
//     console.log('Unable to save user', e);
// });