const express = require("express");
const { mongo } = require("mongoose");
const router = express.Router();

const {
    getAllstudents,
    createstudent,
    getstudentById,
    getstudent,
  

} = require("../controllers/studentController");

router.get("/student/", getAllstudents);

router.post("/student/", createstudent);

router.param("studentId", getstudentById);

router.get("/student/:studentId", getstudent);




module.exports = router;