db.employees.aggregate([
    { $match: { department: "IT" } },
    { $project: { name: 1, salary: 1 } },
    { $sort: { salary: 1 } },
    { $limit: 3 },
]);

db.employees.aggregate([
    { $group: { _id: "$department", total: { $sum: "$salary" } } },
]);

db.employees.aggregate([{ $project: { name: 0 } }]);

db.employees.aggregate([{ $project: { empName: "$name" } }]);

db.employees.aggregate([
    {
        $project: {
            _id: 0,
            name: 1,
            salary: 1,
            bonus: { $multiply: ["$salary", 2] },
        },
    },
]);

db.students.insertOne({
    name: "Alice Johnson",
    age: 23,
    courses: ["Math", "Physics"],
    enrolled: true,
});
db.students.aggregate([{ $group: { _id: null, avgAge: { $avg: "$age" } } }]);

db.students.aggregate([{ $group: { _id: null, avgAge: { $avg: "$age" } } }]);

//display name,email,salary of IT employees

//display annual salary of all employees

//display employees whose salary is greater
//than 3000 and show CTC instead of Salary field

db.students.aggregate([
    { $group: { _id: null, averageAge: { $avg: "$age" } } },
]);

db.address.insertOne({
    studentId: ObjectId("685ce0ec89c4bc1576ab1d88"),
    city: "Jacksonville",
    country: "USA",
});

db.students.aggregate([
    {
        $lookup: {
            from: "address",
            localField: "_id",
            foreignField: "studentId",
            as: "address",
        },
    },
    { $unwind: "$address" },
    { $project: { name: 1, "address.city": 1, "address.country": 1 } },
]);

db.employees.aggregate([
    { $project: { name: 1, location: 1 } },
    { $unwind: "$location" },
]);
