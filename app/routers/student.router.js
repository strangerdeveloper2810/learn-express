const express = require("express");
const studentRouter = express.Router();
const {
  getStudentList,
  getInformationStudent,
  addingStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controller");

// Get list students
studentRouter.get("/", getStudentList);

// Get detail information student
studentRouter.get("/:id", getInformationStudent);

// Add student
studentRouter.post("/", addingStudent);

// Update student
studentRouter.put("/:id", updateStudent);

// Delete
studentRouter.delete("/:id", deleteStudent);

module.exports = studentRouter;
