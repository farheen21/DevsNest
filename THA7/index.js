//Question 1
console.log('Question 1');
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(Object.keys(student));
console.log('------------------------------------------')
//Question 2
console.log('Question 2');
console.log('object before deletion:' , student);
delete student.rollno;
console.log('object after deletion deletion :' , student);
console.log('------------------------------------------')

//Question 3
console.log('Question 3');
console.log('length:' , Object.keys(student).length);
console.log('------------------------------------------')

//Question 4
console.log('Question 4');
var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
    { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false}
];


for(let i in library)
console.log("author:",library[i].author ,"\ntitle",library[i].title , "\nreadingstatus"
,library[i].readingStatus);
console.log('------------------------------------------')
//Question 5
console.log('Question 5');
const cylinder = [{r: 9 , h: 5} , { r:8 , h :9} , {r:5 , h:6}]
for(let i in cylinder) {
    let vol = 2* Math.PI * cylinder[i].r * cylinder[i].h;
    vol = vol.toFixed(4);
    console.log(`Volume of Cylinder ${i}: ${vol}`);
}
console.log('------------------------------------------')
//Question 6
console.log('Question 6');
var library = [ 
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
    { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }
   ];
   
   library.sort(function (a,b){
   
       console.log(b.libraryID ,  a.libraryID, b.libraryID - a.libraryID);
       return  b.libraryID - a.libraryID;
   });
   console.log(library);