//json
// const student = {
//   name: "Omil",
//   age: 21,
// };
// console.log(JSON.stringify(student));
const student = '{"name":"Omil","age":21}';
const newStudent = JSON.parse(student);
console.log(newStudent);
console.log(newStudent.name);
