// const arr=[5,1,3,2,6];
// function double(x) {
//     return x*2;
// }
// function triple(x){
//     return x*3;
// }

// const output=arr.map(triple);
// const output1=arr.map(triple);
// const output2=arr.map(function binary(x){
//     return x.toString(2);
// });
// const output2=arr.map((x)=>x.toString(2));
// console.log(output2);


const user=[
    {firstname: "srishti", lastname: "mandal", age:18},
    {firstname: "karina", lastname: "mandal", age:22},
    {firstname: "pushpa", lastname: "mandal", age:18},
    {firstname: "Suresh", lastname: "mandal", age:58},
    {firstname: "shilpi", lastname: "mandal", age:26},
];

// const output=user.map((x)=> x.firstname+" "+x.lastname)
// console.log(output)

const ou=user.filter((x)=>x.age<30).map((x)=>x.firstname);
console.log(ou)
const outpu=user.reduce(function (acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }
    else{
        acc[curr.age]=1;
    }
    return acc;
},{});
console.log(outpu);