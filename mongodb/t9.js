// Download MSI version using below link:
// https://www.mongodb.com/try/download/database-tools

// Click on the downloaded file and install

// Setup environment variables to add path
// C:\Program Files\MongoDB\Tools\100\bin

// C:\Users\nairx>mongodump -d lpua -o D:\lpubackup

// C:\Users\nairx>mongorestore -d lpua D:\lpubackup\lpua

db.employees.find({ name: { $regex: "Cathy" } });

db.employees.find({ name: { $regex: "cathy" } });

db.employees.find({ name: { $regex: "cathy", $options: "i" } });

db.employees.find({ name: { $regex: "^C" } });

db.employees.find({ name: { $regex: "y$" } });
