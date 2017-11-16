require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');



var app = express();
const port = process.env.PORT;

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

// <-- Dynamic URL -->

// app.get('/todos/:id', (req, res) => {
//     res.send(req.params);
// });

// <-- Challenge -->
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
if (!ObjectID.isValid(id)){
   return res.status(404).send();
}
Todo.findById(id).then((todo) => {
    if(!todo){
      return  res.status(404).send();
    }
    res.send({todo});           // In ES6 we use {} as an array
}).catch((e) => {
     res.status(400).send()});
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo){
        return res.status(404).send();
    }
    res.send(todo);
}).catch((e) => {
    res.status(400).send()
});
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text','completed']);

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }
    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if(!todo){
            res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {                   // if things dont go well we use catch
        res.status(400).send();
    });
});

app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email','password']);
    var user = new User(body);

    // user.save().then((user) => {
        // res.send(user);
        user.save().then(() => {
       return user.generateAuthToken();
          }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
});

app.get('/users/me', authenticate, (req, res) => {
    res.send(req.user);
});

app.listen(port, () => {
    console.log(`Starting server on Port ${port}`);
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