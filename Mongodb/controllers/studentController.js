const student = require("../models/student");

exports.createstudent = (req, res) => {
    const student = new student(req.body);

    student.save((err, data) => {
        if (err || !data) {
            return res.status(400).json({ error: "something went wrong" });
        }
        res.json({ data });
    });
};

exports.getAllstudents = (req, res) => {
    student.find()
        .sort("createdAt")
        .exec((err, students) => {
            if (err || !students) {
                return res
                    .status(400)
                    .json({ error: "something went wrong in finding all students" });
            }
            res.json(students);
        });
};

exports.getstudentById = (req, res, next, id) => {
    student.findById(id).exec((err, student) => {
        if (err || !student) {
            return res.status(400).json({ error: "404 student not found" });
        }

        req.student = student;
        next();
    });
};

exports.getstudent = (req, res) => {
    return res.json(req.student);
};



