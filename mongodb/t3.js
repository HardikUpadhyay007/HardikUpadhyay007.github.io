db.employees.insertOne({
    name: "John Smith",
    email: "john@gmail.com",
    department: "IT",
    salary: 1456,
    location: ["FL", "OH"],
    date: Date(),
});

db.employees.insertMany([
    {
        name: "Mike Joseph",
        email: "mike@gmail.com",
        department: "IT",
        salary: 2456,
        location: ["FL", "TX"],
        date: Date(),
    },
    {
        name: "Cathy G",
        email: "cathy@gmail.com",
        department: "IT",
        salary: 3456,
        location: ["AZ", "TX"],
        date: Date(),
    },
]);

db.employees.find().skip(1);

db.employees.find().limit(1);

db.employees.find().skip(1).limit(1);

db.employees.find().sort({ name: 1 });

db.employees.find().sort({ name: -1 });

db.employees.find().sort({ name: -1 }).limit(1);

db.employees.find({ department: "IT" });

db.employees.find({}, { _id: 0, name: 1, department: 1 });

db.employees.find({}, { _id: 0, name: 1 });

db.employees.find({ location: "FL" });
