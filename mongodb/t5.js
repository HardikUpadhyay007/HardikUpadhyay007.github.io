db.employees.insertMany([
    {
        name: "Amy",
        email: "amy@gmail.com",
        department: "HR",
        salary: 2000,
        location: ["NY", "TX"],
        date: Date(),
    },
    {
        name: "Rafeal",
        email: "rafeal@gmail.com",
        department: "Admin",
        salary: 1500,
        location: ["OH", "TX"],
        date: Date(),
    },
]);

db.employees.updateOne({ email: "john@gmail.com" }, { $set: { salary: 2000 } });

db.employees.updateMany({}, { $set: { points: 1 } });

db.employees.updateMany({ department: "IT" }, { $inc: { points: 3 } });

db.employees.updateMany({ department: "IT" }, { $inc: { points: -1 } });

db.employees.updateMany({}, { $rename: { points: "score" } });

db.employees.updateMany({}, { $unset: { score: "" } });

db.employees.updateMany({}, { $push: { skills: "Java" } });

db.employees.updateMany({}, { $push: { skills: "Python" } });

db.employees.updateMany(
    { email: "john@gmail.com" },
    { $push: { skills: "MERN" } }
);

db.employees.updateMany(
    { email: "john@gmail.com" },
    { $pull: { skills: "MERN" } }
);

db.employees.updateMany(
    { email: "john@gmail.com" },
    { $push: { skills: "MERN" } }
);

db.employees.updateMany(
    { email: "john@gmail.com" },
    { $pull: { skills: "MERN" } }
);

db.employees.updateMany(
    { email: "john@gmail.com" },
    { $addToSet: { skills: "MERN" } }
);

db.employees.updateMany({ email: "john@gmail.com" }, { $pop: { skills: 1 } });

db.employees.updateMany({ email: "john@gmail.com" }, { $pop: { skills: -1 } });

db.employees.updateOne(
    { email: "brian@gmail.com" },
    { $set: { name: "Brian" } },
    { upsert: true }
);

db.employees.deleteOne({
    email: "brian@gmail.com",
});

db.employees.deleteMany({ department: "IT" });
