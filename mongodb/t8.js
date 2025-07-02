//use lpua

db.posts.insertOne({ _id: "p1", post: "Post 1" });
db.posts.insertOne({ _id: "p2", post: "Post 2" });

db.comments.insertOne({
    _id: "c1",
    pid: "p1",
    comment: "This is comment 1 of post 1",
});

db.comments.insertOne({
    _id: "c2",
    pid: "p1",
    comment: "This is comment 2 of post 1",
});

db.comments.insertOne({
    _id: "c3",
    pid: "p2",
    comment: "This is comment 1 of post 2",
});

db.comments.insertOne({
    _id: "c4",
    pid: "p2",
    comment: "This is comment 2 of post 2",
});

db.comments.insertOne({
    _id: "c5",
    pid: "p2",
    comment: "This is comment 3 of post 2",
});

db.posts.aggregate([
    {
        $lookup: {
            from: "comments",
            localField: "_id",
            foreignField: "pid",
            as: "comments",
        },
    },
]);

db.posts.aggregate([
    {
        $lookup: {
            from: "comments",
            localField: "_id",
            foreignField: "pid",
            as: "comments",
        },
    },
    { $unwind: "$comments" },
]);

db.posts.aggregate([
    {
        $lookup: {
            from: "comments",
            localField: "_id",
            foreignField: "pid",
            as: "comments",
        },
    },
    { $unwind: "$comments" },
    { $project: { _id: 0, post: 1, "comments.comment": 1 } },
]);

db.marks.find({}, { _id: 0, name: 1, term: 1, subject: 1, score: 1 });

db.marks
    .find({}, { _id: 0, name: 1, term: 1, subject: 1, score: 1 })
    .sort({ name: 1 });

db.marks
    .find({}, { _id: 0, name: 1, term: 1, subject: 1, score: 1 })
    .sort({ name: 1, term: 1 });

db.marks
    .find({}, { _id: 0, name: 1, term: 1, subject: 1, score: 1 })
    .sort({ term: 1 });

db.marks.aggregate([{ $group: { _id: "$name", total: { $sum: "$score" } } }]);

db.marks.aggregate([
    { $group: { _id: "$subject", total: { $sum: "$score" } } },
]);

db.marks.aggregate([{ $group: { _id: "$term", total: { $sum: "$score" } } }]);

db.marks
    .aggregate([
        {
            $group: {
                _id: { name: "$name", subject: "$subject" },
                total: { $sum: "$score" },
            },
        },
    ])
    .sort({ _id: 1 });

db.marks
    .aggregate([
        {
            $group: {
                _id: { term: "$term", name: "$name" },
                Avg: { $avg: "$score" },
            },
        },
    ])
    .sort({ _id: 1 });

db.employees.aggregate([
    { $project: { _id: 0, name: 1, dept: "$department" } },
]);

db.employees.aggregate([
    {
        $project: {
            _id: 0,
            name: 1,
            salary: 1,
            Grade: {
                $cond: [{ $gt: ["$salary", 2000] }, "Grade A", "Grade B"],
            },
        },
    },
]);

db.employees.aggregate([
    {
        $project: {
            _id: 0,
            name: 1,
            salary: 1,
            Grade: {
                $cond: {
                    if: { $gt: ["$salary", 2000] },
                    then: "Grade A",
                    else: "Grade B",
                },
            },
        },
    },
]);

db.employees.updateMany({ department: "IT" }, { $set: { strSalary: "2500" } });

db.employees.updateMany(
    { department: "Admin" },
    { $set: { strSalary: "1000" } }
);

db.employees.aggregate([
    {
        $project: {
            _id: 0,
            name: 1,
            department: 1,
            Sal: { $convert: { input: "$strSalary", to: "int" } },
        },
    },
    { $group: { _id: "$department", total: { $sum: "$Sal" } } },
]);

db.employees.aggregate([
    {
        $project: {
            _id: 0,
            name: 1,
            department: 1,
            Sal: { $convert: { input: "$strSalary", to: "int" } },
        },
    },
    { $group: { _id: "$department", total: { $sum: "$Sal" } } },
    { $out: "depWiseSalary" },
]);

db.createView("depWiseSalaryView", "employees", [
    {
        $project: {
            _id: 0,
            name: 1,
            salary: 1,
            department: 1,
            Sal: { $convert: { input: "$strSalary", to: "int" } },
        },
    },
    { $group: { _id: "$department", total: { $sum: "$Sal" } } },
]);

db.depWiseSalaryView.drop();

db.createView("viewName", "collectionname", []);
