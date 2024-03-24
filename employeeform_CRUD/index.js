const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = 3000;

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employeedb'
});

// Connect to MySQL
db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected');
});

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));

// GET request to render employee form
app.get('/', (req, res) => {
    res.render('employeeForm');
});

// POST request to handle form submission and insert data into MySQL
app.post('/employeeForm', (req, res) => {
    const { name, employee_number, email, address, phone_number } = req.body;
    const insertQuery = 'INSERT INTO employees (name, employee_number, email, address, phone_number) VALUES (?, ?, ?, ?, ?)';
    db.query(insertQuery, [name, employee_number, email, address, phone_number], (err, result) => {
        if (err) throw err;
        console.log('Employee data inserted successfully');
        res.redirect('/displayEmployees'); // Redirect to display page
    });
});

// GET request to display employees
app.get('/displayEmployees', (req, res) => {
    const selectQuery = 'SELECT * FROM employees';
    db.query(selectQuery, (err, results) => {
        if (err) throw err;
        res.render('displayEmployees', { employees: results });
    });
});

// GET request to render update form
app.get('/update/:id', (req, res) => {
    const id = req.params.id;
    const selectQuery = 'SELECT * FROM employees WHERE id = ?';
    db.query(selectQuery, [id], (err, result) => {
        if (err) throw err;
        res.render('updateEmployee', { employee: result[0] });
    });
});

// POST request to update employee data
app.post('/update/:id', (req, res) => {
    const id = req.params.id;
    const { name, employee_number, email, address, phone_number } = req.body;
    const updateQuery = 'UPDATE employees SET name=?, employee_number=?, email=?, address=?, phone_number=? WHERE id=?';
    db.query(updateQuery, [name, employee_number, email, address, phone_number, id], (err, result) => {
        if (err) throw err;
        console.log('Employee data updated successfully');
        res.redirect('/displayEmployees'); // Redirect to display page
    });
});

// GET request to delete employee
app.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    const deleteQuery = 'DELETE FROM employees WHERE id=?';
    db.query(deleteQuery, [id], (err, result) => {
        if (err) throw err;
        console.log('Employee data deleted successfully');
        res.redirect('/displayEmployees'); // Redirect to display page
    });
});

// Listen on port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
