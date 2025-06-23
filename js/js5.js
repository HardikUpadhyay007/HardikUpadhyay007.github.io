function greet(student) {
    console.log(
        `Hello ${student.name}, your age is ${student.age} and you are from ${student.city}`
    );
}

let student = {
    name: "John",
    age: 21,
    city: "New York",
};
greet(student);


function add(){
    console.log(arguments);
    
}