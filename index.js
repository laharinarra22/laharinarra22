const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'studentinfo'
});

// Connect to MySQL
db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected');
});

// Middleware
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('studentForm')
})

app.get('/students', (req, res) => {
    let sql = 'SELECT * FROM students';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.render('display', { students: result });
    });
});

// Update Student Form Route
app.get('/update/:id', (req, res) => {
    let studentId = req.params.id;
    let sql = 'SELECT * FROM students WHERE id = ?';
    db.query(sql, studentId, (err, result) => {
        if (err) throw err;
        res.render('update', { student: result[0] });
    });
});

// Update Student
app.post('/update/:id', (req, res) => {
    let studentId = req.params.id;
    let updatedStudent = req.body;
    let sql = 'UPDATE students SET ? WHERE id = ?';
    let query = db.query(sql, [updatedStudent, studentId], (err, result) => {
        if (err) throw err;
        console.log(result);
        res.redirect('/students');
    });
});


app.post('/students', (req, res) => {
    let student = req.body;
    let sql = 'INSERT INTO students SET ?';
    let query = db.query(sql, student, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.redirect('/students');
    });
});

app.get('/delete/:id', (req, res) => {
    let studentId = req.params.id;
    let sql = 'DELETE FROM students WHERE id = ?';
    db.query(sql, [studentId], (err, result) => {
        if (err) throw err;
        res.redirect('/students');
    });
});

app.listen(3000, () => {
    console.log('serving on port 3000')
})

