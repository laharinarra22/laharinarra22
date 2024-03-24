
CREATE DATABASE IF NOT EXISTS employeedb;


USE employeedb;
CREATE TABLE IF NOT EXISTS employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    employee_number VARCHAR(50),
    email VARCHAR(255),
    address VARCHAR(255),
    phone_number VARCHAR(20)
);

select * from employees