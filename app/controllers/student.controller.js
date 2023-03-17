let studentList = require("../data/Student.json");

// Get list students
const getStudentList = (req, res) => {
  res.status(200).send(studentList);
};

// Get information student
const getInformationStudent = (req, res) => {
  const { id } = req.params;
  const index = studentList.findIndex((student) => student.id == id);
  if (id !== -1) {
    const student = studentList[index];
    res.status(200).send(student);
  } else {
    res.status(404).send("not found");
  }
};

// Adding student
const addingStudent = (req, res) => {
  let student = req.body;
  student = {
    id: Math.random(),
    ...student,
  };

  studentList = [...studentList, student];
  return res.status(200).send(student);
};

// Update student
const updateStudent = (req, res) => {
  const { id } = req.params;
  const { fullName, age, numberClass } = req.body;
  const index = studentList.findIndex((student) => student.id == id);
  if (index !== -1) {
    const oldStudent = studentList[index];

    const updatedStudent = { ...oldStudent, fullName, age, numberClass };

    studentList[index] = updatedStudent;

    res.status(200).send(updatedStudent);
  } else {
    res.status(404).send("Có cái qq mà update được nhé");
  }
};

// Delete student
const deleteStudent = (req, res) => {
  const { id } = req.params;
  const index = studentList.findIndex((student) => student.id == id);

  if (index !== -1) {
    const studentDelete = studentList[index];

    studentList = studentList.filter((student) => student.id != id);

    res.status(200).send(studentDelete);
  } else {
    res.status(404).send("Not Found");
  }
};

module.exports = {
  getStudentList,
  getInformationStudent,
  addingStudent,
  updateStudent,
  deleteStudent,
};
