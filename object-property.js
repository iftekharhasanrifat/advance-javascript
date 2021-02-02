//object array
const students = [
    {id: 1,name :"omar sunny"},
    {id: 2,name :"manna"},
    {id: 3,name :"hasan"},
    {id: 4,name :"dipjol"}
];
// const studentsName=[];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     studentsName.push(element.name);
// }

// map is used instead of loop
const names = students.map(s=>s.name);
const ids= students.map(s=>s.id);
const bigger = students.filter(s=>s.id>2);
const bigger1 = students.find(s=>s.id>2);
console.log(bigger1);