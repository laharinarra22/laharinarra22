create database studentinfo;
use studentinfo;
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    phoneNumber VARCHAR(20),
    age INT
);



select * from students;
