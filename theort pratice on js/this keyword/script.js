"use strict";
// global object
console.log(this);
// inside function
function x(){
    console.log(this);
}
x();
// window.x();

// in objext
const student={
    name:"srishti",
    printname:function(){
        console.log(this);
    }
};
student.printname();

const students2={
    name:"deepika",
}
student.printname.call(students2);

// in arrow function

const obj={
     y:()=>{
        console.log(this)
    },
};
obj.y();

const obj2={
    a:10,
    x:function(){
     const y=()=>{

        console.log(this)
    };
    y();
},

};
obj2.x();


// Case 1:
// Global → obj → arrow → (this = global)

// Case 2:
// obj2 → x() → arrow y → (this = obj2)
