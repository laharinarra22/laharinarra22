use personalfinance;

INSERT INTO Users (Name, Email, Username, PasswordHash, FinancialGoals) 
VALUES ('John Doe', 'john.doe@example.com', 'johndoe', 'hashedpassword123', 
	'{"goal1": "Save $1000 by end of year", "goal2": "Invest in stocks"}'),
       ('Alice Smith', 'alice.smith@example.com', 'alicesmith', 'hashedpassword456', 
       '{"goal1": "Pay off credit card debt", "goal2": "Buy a car"}');

select * from users;

INSERT INTO Accounts (UserID, Name, Type, Balance, Institution) 
VALUES (1, 'Savings Account', 'Savings', 5000.00, 'ABC Bank'),
       (1, 'Checking Account', 'Checking', 2500.00, 'XYZ Credit Union'),
       (2, 'Investment Portfolio', 'Investment', 10000.00, '123 Investments');

select * from Accounts;

INSERT INTO Categories (Name) 
VALUES ('Groceries'), ('Rent'), ('Utilities'), ('Entertainment'), ('Transportation');

select * from Categories;

INSERT INTO Budgets (AccountID, CategoryID, MonthlyLimit, CurrentSpending) 
VALUES (1, 1, 500.00, 400.00),
       (1, 2, 1000.00, 950.00),
       (2, 4, 200.00, 150.00);

select * from Budgets;

INSERT INTO Transactions (AccountID, Date, Amount, CategoryID, Payee, Description) 
VALUES (1, '2024-02-01', 50.00, 1, 'Local Grocery Store', 'Grocery shopping'),
       (1, '2024-02-05', 150.00, 2, 'XYZ Apartments', 'Monthly rent payment'),
       (2, '2024-02-10', 25.00, 4, 'Movie Theater', 'Movie tickets');

select * from Transactions;

INSERT INTO Investments (UserID, Name, Type, Quantity, Value, PurchaseDate) 
VALUES (1, 'Apple Inc.', 'Stock', 10, 1500.00, '2024-01-15'),
       (2, 'Tesla Inc.', 'Stock', 5, 3000.00, '2024-02-01');

select * from investments;

INSERT INTO Bills (UserID, Name, DueDate, Amount, Payee, Description, Status) 
VALUES (1, 'Electric Bill', '2024-02-15', 100.00, 'ABC Electric Company', 'Monthly electricity bill', 'Pending'),
       (2, 'Internet Bill', '2024-02-20', 50.00, 'XYZ Internet Provider', 'Monthly internet bill', 'Paid');

select * from bills;

INSERT INTO FinancialProjections (UserID, Date, Income, Expenses, NetWorth) 
VALUES (1, '2024-01-31', 3000.00, 2000.00, 50000.00),
       (2, '2024-01-31', 4000.00, 2500.00, 60000.00);

select * from FinancialProjections;

INSERT INTO Goals (UserID, Name, TargetAmount, CurrentAmount, Deadline, Status) 
VALUES (1, 'Emergency Fund', 10000.00, 5000.00, '2024-12-31', 'InProgress'),
       (2, 'Vacation Fund', 5000.00, 2000.00, '2024-08-31', 'InProgress');

select * from goals;
