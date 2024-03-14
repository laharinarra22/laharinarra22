
CREATE DATABASE IF NOT EXISTS PersonalFinance;

USE PersonalFinance;


CREATE TABLE IF NOT EXISTS Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(255),
    Email VARCHAR(255) UNIQUE,
    Username VARCHAR(50) UNIQUE,
    PasswordHash VARCHAR(255),
    FinancialGoals TEXT
);


CREATE TABLE IF NOT EXISTS Accounts (
    AccountID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    Name VARCHAR(255),
    Type VARCHAR(50),
    Balance DECIMAL(15, 2),
    Institution VARCHAR(255),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);



CREATE TABLE IF NOT EXISTS Categories (
    CategoryID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(255) UNIQUE
);


CREATE TABLE IF NOT EXISTS Budgets (
    BudgetID INT PRIMARY KEY AUTO_INCREMENT,
    AccountID INT,
    CategoryID INT,
    MonthlyLimit DECIMAL(15, 2),
    CurrentSpending DECIMAL(15, 2),
    FOREIGN KEY (AccountID) REFERENCES Accounts(AccountID),
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)
);


CREATE TABLE IF NOT EXISTS Transactions (
    TransactionID INT PRIMARY KEY AUTO_INCREMENT,
    AccountID INT,
    Date DATE,
    Amount DECIMAL(15, 2),
    CategoryID INT,
    Payee VARCHAR(255),
    Description TEXT,
    FOREIGN KEY (AccountID) REFERENCES Accounts(AccountID),
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)
);


CREATE TABLE IF NOT EXISTS Investments (
    InvestmentID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    Name VARCHAR(255),
    Type VARCHAR(50),
    Quantity DECIMAL(15, 2),
    Value DECIMAL(15, 2),
    PurchaseDate DATE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);


CREATE TABLE IF NOT EXISTS Bills (
    BillID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    Name VARCHAR(255),
    DueDate DATE,
    Amount DECIMAL(15, 2),
    Payee VARCHAR(255),
    Description TEXT,
    Status ENUM('Pending', 'Paid'),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);


CREATE TABLE IF NOT EXISTS FinancialProjections (
    ProjectionID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    Date DATE,
    Income DECIMAL(15, 2),
    Expenses DECIMAL(15, 2),
    NetWorth DECIMAL(15, 2),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);


CREATE TABLE IF NOT EXISTS Goals (
    GoalID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    Name VARCHAR(255),
    TargetAmount DECIMAL(15, 2),
    CurrentAmount DECIMAL(15, 2),
    Deadline DATE,
    Status ENUM('InProgress', 'Completed'),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

