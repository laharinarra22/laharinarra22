let express = require('express');
let methodOverride = require('method-override');
let app = express();
let path = require('path')
//uuid generates random id for storing of data in array objects
const { v4: uuidv4 } = require('uuid');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

// the below line of code acts as a middleware to parse the form data information
app.use(express.urlencoded({ extended: true }))
//npm i method-override installs the package the package is basically used to override a method
//example patch request cannot be called in form so method override comes in place 
//and acts as a 
app.use(methodOverride('_method'))
// the below line of code acts as a middleware to parse the json data information
app.use(express.json());

// GET/comments - list all comments
// get/comments/new - form to create a new comment
// Post/comments - create a new comment on server
// GET/comments/:id - get one comment using id
// GET/comments/:id/edit - form to edit a specific comment
// Patch/comments/:id - update one comment on server
// Delete/comments/:id - delete one comment on server

let comments = [{ id: uuidv4(), username: 'deepu', comment: 'thats so funny' },
{ id: uuidv4(), username: 'spidey', comment: 'aww so hilarious' },
{ id: uuidv4(), username: 'aj', comment: 'wtf is this' },
{ id: uuidv4(), username: 'nedy', comment: 'siripay varala' }
]

app.get('/comments', (req, res) => {
    res.render('comments', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('new')
})

app.post('/comments', (req, res) => {
    let { username, comment } = req.body;
    comments.push({ username, comment, id: uuidv4() })
    //the below will redirect to the comments.ejs 
    //where the default status code for redirect is 302
    //we can change the status code aswell
    res.redirect('comments')
})

app.get('/comments/:id', (req, res) => {
    let { id } = req.params
    let comment = comments.find(c => c.id === id)
    res.render('show', { comment })
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    let comment = comments.find(c => c.id === id)
    res.render('edit', { comment })
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newcomment = req.body.comment;
    const foundcomment = comments.find(c => c.id === id);
    foundcomment.comment = newcomment;
    res.redirect('/comments')
})

app.get('/tacos', (req, res) => {
    res.send('get /tacos resposnse')
})

app.post('/tacos', (req, res) => {
    let { meat, qty } = req.body;
    res.send(`you ordered ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
    console.log('on port 3000')
})

//rest is nothing but reperesentional state transfer ie its a set of guidelines for
//how the client+server should communicate and perform crud operation.

//restful is following these set of rules to create client+server communications.


//one way of defining restful for tweets

// GET/comments - list all comments
// Post/comments - create a new comment
// GET/comments/:id - get one comment using id
// Patch/comments/:id - update one comment
// Delete/comments/:id - delete one comment


