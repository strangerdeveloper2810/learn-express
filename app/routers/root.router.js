const express = require("express");
const studentRouter = require("./student.router");
const router = express.Router();

// url <==> https://localhost:8000/api/student
router.use("/api/student", studentRouter);

module.exports = router;
