let person=
 {
     firstname:"John",
     lastname:"Kendy",
     age:50,
    weight:60
 }

// //Accessing Object peroperties
// console.log(person["firstname john
// console.log(person.age); //50

//Add new property the existing object
// person["height"]=5.5; // person.height=5.5
// console.log(person["height"]);//5.5

// update exsiting property
// person["weight"]=65;
// console.log(person["weight"]);//65

//Remove the property from the object
delete person["age"];
console.log(person["age"]);/ undefined

console.log("*********** looping object***************");
//for/in loop
for(let x in person)
{

    //console.log(x);// prints only property names
   // console.log(person[x]);//prints only value of 
   console.log(x+""+person[x]);
}
