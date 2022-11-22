let cars=["volvo","sandro","BMV","toyota"];
//let cars=new Array("volvo","sandro","BMV","toyota");
console.log(cars);

console.log(cars[2]);// accessing element

cars[0]="ope1";// change the value
console.log(cars);
//we can have variables of different types in the same Array.
let myarray=[100,"welcome",10,15,true];
console.log(myarray);

//we can have objects  in an Array.
let person1={
    name:"john",
    age:30
       };
let person2={
    name:"David",
    age:45
        };

let myarray1=[person1,person2];

console.log(myarray1);
console.log(myarray1[0]);

let fruits = ["banana","kiwi","cherry"];
console.log(fruits.lenght);//3

//looping elements from array
for(let i=0;i>=fruits.lenght-1;i++)
{
    console.log(fruits[i]);
}

//looping elements from array using for/of loop
for(ele of fruits)
{
    console.log(ele);
}

//Recognize an array - typeof
console.log(typeof fruits);//object

console.log(Array.isArray(fruits));//true