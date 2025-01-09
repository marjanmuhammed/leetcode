// let fruits=["apple", "orange", "banana"];
// document.write(fruits.join("- "));


// let  fruits=["apple","banana","mango","orange"];
// let lastfruits =fruits.pop();//removing last element //
// document.write(fruits);
// document.write("<br>");
// document.write(lastfruits)//removed element //


// let fruits=["apple","orange","banana"];
// fruits.push("mango");
// document.write(fruits);///array ndey end lek element add cheyyum//




// let fruits=["apple","orange","banana"];
// document.write(fruits.at());



// let fruits=["apple","orange","banana"];
// document.write(fruits.join("- "));




// const fruits=["banana","orange","apple"];
// document.write(fruits.toString());


// let fruits=["appple","banana","orange"];
// let lastelement=(fruits.pop());//removing last element
// document.write(fruits);
// document.write("<br>");
// document.write(lastelement);





// let fruits=["apple","banana","orange"];
// fruits.push("mango");
// document.write(fruits);



// const fruits=["apple","orange","banana"];
// fruits.push("sawad");
// document.write(fruits);

//////////////search methods/////////////////////
         


//1.indexOF//

// let fruits =["apple","orange","banana"];
// let index =fruits.indexOf("orangee");
// document.write(index);


//2.includes//


// let fruits=["apple","banana"];
// let inn=fruits.includes("banana");
// document.write(inn);


// document.write("<br>");

// let noinn=fruits.includes("mango");
// document.write(noinn);




// let numbers=[3,4,5,6];
// let 


// let arr =[1,2,3];
// let remove=arr.shift();
// document.write(arr);





// let person ={name: "john",age:25,city:"new york"};
// for(let key in person){
//     document.write(key,person[key]);
// }



// let str= "hello";
// for (let char of str){
//     document.write(char);

// }



// const arr=[
//     {
//         name:"alice",
//         mark:25,
//         place: "kannur",


//     },
    

//     {
          
//     name:"john",
//     mark:10,
//     place: "calicut",

//     },




//     {
          
//     name:"filix",
//     mark:40,
//     place: "wayanad",
//     }





// ];

//  var newarr=arr.map((element)=> {
//     return {
//         element,
//         country:"india"
    
//     };
    



// });
// console.log(newarr);



// function add(a,b){
//     return a+b;

// }
// let result =add(5,3);
// console.log(result)


// var item =function(name){
//     return "hello ," +name;

// }
// console.log(item("john"));





// (function(){
//     var localvar ="i am a local variable";
//     console.log(localvar);
// })();



// (function sayhi(){
//     console.log("i am local variable");
// })();


// (function (){
//     var num=22;
//    console.log(num); 
// })();
// console.log(num)



// const result =( function(){
//     let a=5;
//     let b=10;
//     return a+b;
// }());
// console.log(result);



// (() => {
//     console.log("arrow function in iife");
// })();


// function process(calback){
//     console.log("processing");
//     calback();
// }
// function done(){
//     console.log("done");
// }
// process(done);


// let sample = () =>console.log("heyy happy new year");
// sample();
    

// const multiply =(a,b)=> {
//     let result =a*b;
//     return result;
// };
// console.log(multiply(5,5));


// let sum=(a,b,c) => {
//     let result =a+b+c;
//     return result;
// };
// console.log(sum(5,4,1))





// function greet(name, call) {  // 'name' and 'callback' are parameters
//     console.log("Hello"+name);
//     call();  // Calling the 'callback' function passed as a parameter
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// greet("John", sayGoodbye);  // 'John' is passed for 'name' and 'sayGoodbye' for 'callback'



// function greet(name,callback){
//     console.log("hello "+name);
//     callback();

// }
// function sayby(){
//     console.log("goodbye!");
// }
// greet("john",sayby)




// function sum(n) {
//     // Base case: when n is 1, return 1
//     if (n === 1) {
//         return 1;
//     }

//     // Recursive case: add n to the sum of numbers from 1 to (n-1)
//     return n + sum(n - 1);  // Recursive call
// }

// console.log(sum(5));  // Output: 15

// function sum(n){
//     if(n===1){
//         return 1;
//     }

// return n+sum(n-1);
// }
// console.log(sum(5));


// function sum(n){
//     if(n <=0){
//         return;
//     }
//     console.log(n)
//     sum(n-1);
// }
// sum(5)



// let printglobalvar="i am global variable";

// function printglobal(){
//     console.log(printglobalvar);
// }
// printglobal();


// function blockvar(){
//     let conetent="i am block variable";
//     console.log(conetent);


// }
// blockvar();






// function outerFunction() {
//     let outerVar = "Outer Scope Variable"; // Parent scope-il declare cheyyunnu

//     function innerFunction() {
//         let innerVar = "Inner Scope Variable"; // Child scope-il declare cheyyunnu
//         console.log(outerVar); // Parent scope-il ullath access cheyyuka
//         console.log(innerVar); // Child scope-il ullath access cheyyuka
//     }

//     innerFunction(); // Child function call cheyyuka
//     // console.log(innerVar); // ERROR: Parent scope-il ninnum child variable access cheyyan patilla
// }

// outerFunction();





// function parentfunction(){
//     let  parentvar="its a parent variable";

//     function childfunction(){
//         let childvar="its a child variable";
//         console.log(parentvar);
//         console.log(childvar);
//     }
    
//     childfunction();
// }
// parentfunction();


// arr1=[1,2,3,4,5];
// arr2=[6,7,8,9,10];
// let combained=[...arr1,...arr2];

// console.log(combained);




// let person = {
//     name: "John", // key: name, value: "John"
//     age: 30,      // key: age, value: 30
//     isStudent: false, // key: isStudent, value: false
// };

// console.log(person);    // Output: John
// // console.log(person.age);  // Output: 30
// // console.log(person.isStudent); // Output: false



// var  person={
//     name:"john",
//     age:50,
// }
// console.log(person.name);
// console.log(person.age);


// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2020,
//     displayInfo: function () {
//         console.log(car.brand + " " + car.model+ " (" + this.year + ")");
//     },
// };

// // console.log(car.brand); // Output: Toyota
// car.displayInfo(); // Output: Toyota Corolla (2020)




// let car={
//     brand:"toyota",
//     model:"corola",
//     year:2020,
//     display: function(){
//         console.log(this.brand+" "+this.model+" "+this.year);
//     },

// };
// console.log(car.brand);
// car.display();



// let person =  Object();
// person.name = "Alice";
// person.age = 25;
// person.greet = function () {
//     console.log("Hi, I am " + this.name);
// };

// console.log(person.name); // Output: Alice
// person.greet(); // Output: Hi, I am Alice


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function () {
//         console.log("Hello, my name is " + this.name);
//     };
// }

// let person1 = new Person("sunny", 30);
// let person2 = new Person("Johni", 40);

// console.log(person1.age); // Output: John
// person2.greet() // Output: Hello, my name is Jane




// function Person(name, age,country) {
//     this.name = name;
//     this.age = age;
//     this.country = country;
//     this.greet = function () {
//         console.log("Hello, my name is " + this.name);
//     };
// }

          
//          person= new Person("Jane", 25 ,"argentina");

// console.log(person); // Output: John
// // person2.greet(); // Output: Hello, my name is Jane


// function person(name,age){
//     this.name=name;
//     this.age=age;
//     this.greet=function(){
//         console.log("hello,my name is"+" "+ this.name);
//     };


// }
// let person1=new person("john",30);
// let person2=new person("simon",25);


// console.log(person1.name);
// person2.greet();



// function person(name,age){
//     this.name=name;
//     this.age=age;
//     this.great=function(){
//         console.log("hello,my name is"+" "+person.name);
//     };
// }
// let person1=new person("john",30);
// let person2=new person()



// function Person(name, age) {
//     this.name = name;  // Object-ine 'name' property kodukkunnu
//     this.age = age;    // Object-ine 'age' property kodukkunnu
//     this.greet = function() {
//         console.log("Hello, my name is " + this.name);
//     };
// }

// let person1 = new  Person("Alice", 25);  // New object create cheyyunnu
// let person2 =  new Person("Bob", 30);    // Muthal object create cheyyunnu

// person1.greet();  // Output: Hello, my name is Alice
// person2.greet();  // Output: Hello, my name is Bob



// function greet() {
//     console.log(this); // Output: Window (browser)
// }
// greet();


// sayHello(); // TypeError: sayHello is not a function
// let sayHello = function () {
//     console.log("Hi!");
// };





// function outerFunction() {
//     let count = 0;


//     function innerFunction() {
//         count++;  // increments value of a
//         console.log(count);  // prints updated value of a
//     }


//  innerFunction();
//  innerFunction();
//  innerFunction();
// }

// outerFunction();









// function add(a, b) {
//     return a + b;
// }

// function operate(a, b, operation) {
//     return operation(a, b);
// }

// let result = operate(5, 3, add);
// console.log(result);  // Output: 8


// function great(name){
//     console.log("hello"+name);
// }
// function high(callback){
//     let username="alice";
//   callback(username);
// }
// high(great);




// function greet(name) {
//   console.log("Hello, " + name);
// }

// function high(callback) { 
//   let username = "Alice";
//   callback(username); // Ivide callback ennu parayunnath greet function aanu
// }

// high(greet); // Ivide greet enna function pass cheyyunnu as callback




// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function() {
//   console.log("Hello, my name is " + this.name);
// };

// const person1 = new Person("Rahul");
// person1.sayHello(); // Output: Hello, my name is Rahul

// const person2 = new Person("Anjali");
// person2.sayHello(); // Output: Hello, my name is Anjali









// function person(name){
//   this.name=name;
// }
// person.prototype.sayhello=function(){
//   console.log("hello world"+this.name);

// }
// let person1=new person("rahul");
// person1.sayhello();





// let fruits = ["Apple"];
// for (let index in fruits) {
//     console.log(index);
//     // console.log(fruits[index]);
// }


// const arr = [10, 20, 30, 20];
// console.log(arr.indexOf(10)); // Output: 1







// const person = {
//   name: "Rahul",
//   greet: function (age) {
//     console.log("Hi, my name is " +this.name +" and I am "+age+ "years old.");
//   }
// };

// const firstPerson = { name: "Ammu" };
// const secondperson ={name:"savad"};


// person.greet.call(firstPerson, 23);

    


// const person1 = {
//   name: "Bob",
//   greet: function() {
//       console.log(`Hello, I am ${this.name}`);
//   }
// };

// const person2 = { name: "Charlie" };

// // person1 nte greet method person2 contextil call cheyyuka
// person1.greet.call(person2); 
// // Output: "Hello, I am Charlie"









// const person1={
//   name: "savad",
//   greet: function(age){
//     console.log("hello my name is "+this.name);

//   }

 
// };
// var person2={name:"marjan"}

// person1.greet.call(person2);




// var array=[1,2,3,4,5];


// var [a,b,c] =array;

// console.log(a);
// console.log(b);





// const person1={
//   name:"savad",
//   greet:function(place){
//     console.log("my name is "+this.name+" i am coming from "+place+".");

//   }
// };

// person1.greet.call(person1,"kannur")









// var person ={
//   name:"savad",
//   palce:" calicut",
 
//   greet: function (){
//     console.log("my name is "+this.name+" i am from"+this.palce);

//   }
// };
// let person1={palce:"kannur"}
// person.greet.call(person,person1)





// let array= [1,2,3,4,5];
// let array2 = new Array(5,6,7,8,9);

// console.log(array);
// console.log(array2);



// let array = [1, 2, 3, 4, 5];
// let array2 = new Array(5, 6, 7, 8, 9);  // Use `new Array()` constructor

// console.log(array);   // [1, 2, 3, 4, 5]
// console.log(array2);  // [5, 6, 7, 8, 9]



// function greet (city, country) {
  
//   console.log("Hello, I am "+this.name+" I am  coming from"+ city+ country);
// }

// const person1 = { name: "Savad" };

// greet.apply(person1, [" Kannur", " India"]);
// // Output: Hello, I am Savad. I am from Kannur, India.





// function greet(city,country){
//   console.log("hello i am "+this.name+"i am coming from"+city+country);
// }
// var person={name:"savad"};
// greet.apply(person,["kannur","india"]);







// function greet(city, country) {
//   console.log("Hello, I am " + this.name + ". I am coming from " + city + ", " + country + ".");
// }

// const person = { name: "Savad" };

// greet.call(person, "Kannur", "India");
// // Output: Hello, I am Savad. I am coming from Kannur, India.







// function greet(city, country) {
//     console.log("Hello, I am " + this.name + " I am coming from " + city + ", " + country + ".");
// }

// const person = { name: "Savad" };

// const boundGreet = greet.bind(person, "Kannur");
// boundGreet("India");
// // Output: Hello, I am Savad. I am coming from Kannur, India.







// function greet(city,country){
//   console.log("hello i am "+this.name+"i am coming from"+city+country);
// }
// const person={name:"savad"};
// const mainperson=greet.bind(person," kannur ");
// mainperson("india");







// function greet(name, callback,firstcallback) {
//   console.log("Hello " + name);
//   callback();
//   firstcallback();
// }

// function afterGreeting() {
//   console.log("Nice to meet you!");
// }
// function secondgreet(){
//   console.log("thank you");

// }

// // Calling the greet function and passing the callback
// greet("Savad", afterGreeting,secondgreet);




// function greet(city, country) {
//   console.log("Hello, I am " + this.name + ". I am coming from " + city + ", " + country + ".");
// }

// const person = { name: "Savad" };

// const mainperson = greet.bind(person, "Kannur");
// mainperson("India");





// function greet(city,country){
//   console.log("hello  i am "+this.name+" i am coming from"+city+country);
// }
// var person={name:"john"};

// var mainperson=greet.bind(person," kannur ");
// mainperson(" india")






// // Function to greet with city and country
// function greet(city, country) {
//   console.log("Hello, I am " + this.name + ". I am coming from " + city + ", " + country + ".");
// }

// // Person object
// var person = { name: "Savad" };

// // Using `call()` to set `this` to `person` and pass arguments
// greet.call(person, "Kannur", "India");






// const person1={
//   name:"savad",
//   greet: function(palce){
//   console.log("my name is "+this.name+palce);

//   }
// };
// person1.greet.call(person1," kannur");







// const person = {
//   name: "Savad",
//   greet: function(city, country) {
//     console.log("Hello, I am " + this.name + ". I am coming from " + city + ", " + country + ".");
//   },
//   introduce: function() {
//     // Using call to call the 'greet' method within the same object
//     person.greet.call(person, "Kannur", "India");  // 'this' refers to the current object (person)
//   }
// };

// // Calling the introduce method, which calls the greet method using call()
// person.introduce();




// function greet(city, country) {
//   console.log("Hello, I am " + this.name + ". I am from " + city + ", " + country);
// }

// const person1 = { name: "Savad" };
// const person2 = { name: "Firoz" };

// function introduce() {
//   // Using call() to call greet method with person1 context
//   greet.call(person1, "Kannur", "India");  // 'this' refers to person1 here
  
//   // Using call() to call greet method with person2 context
//   greet.call(person2, "Kochi", "India");  // 'this' refers to person2 here
// }

// // Calling the introduce function
// introduce();





// const person1 = {
//   name: "Savad"
// };

// const person2 = {
//   name: "Firoz"
// };

// function greet(city, country) {
//   console.log("Hello, I am " + this.name + ". I am from " + city + ", " + country);
// }

// // Using call() to invoke greet() with person1 as context
// greet.call(person1, "Kannur", "India");

// // Using call() to invoke greet() with person2 as context
// greet.call(person2, "Kochi", "India");




// function greet(city,country){
//   console.log("hello my name is"+this.name+" i am from"+city+country)
// }
// var person={name:"John"};
// var mainperson=greet.bind(person," kannur");
// mainperson(" india");




// function greet(place,country){
//   console.log("my name is "+this.name+ ". i am coming from "+ place + ", "+country + ".");

// }
// var person={name:"john"}
// var mainperson=greet.bind(person,"kannur")
// mainperson("india")





// function greet(place, country) {
//   console.log("My name is " + this.name + ". I am coming from " + place + ", " + country + ".");
// }

// var person = { name: "John" };

// // Using bind to set 'this' and the first argument ("Kannur")
// var mainperson = greet.bind(person, "Kannur");

// // Calling the bound function with the second argument ("India")
// mainperson("India");




// let myMapp = new Map();

// // Add key-value pairs using set()
// myMapp.set('name', 'Alice');
// myMapp.set('age', 25);

// // Retrieve values using get()
// console.log(myMapp.get('name'));  // Output: Alice
// console.log(myMapp.get('age'));   // Output: 25
// console.log(myMapp.get('city'));  // Output: undefined (no such key)


// var mymap =new Map();

// mymap.set('name','marjan');
// mymap.set('age','25');
// mymap.set('place','kannur');

// console.log(mymap.get('name'));
// console.log(mymap.get('age'));
// console.log(mymap.get('place'));








// const mymap =new Map();

// mymap.set('name','marjan');
// mymap.set('age','25');

// console.log(mymap.get('name'));
// console.log(mymap.get('age'));





// function greet(city,country){
//   console.log('my name is '+this.name+' i am coming from '+city+country);
// }
// let person={name:' marjan k k'};

// greet.call(person,' calicut ',' india ');



// let person={
//   name:"muhammad marjan kk",
//   greet:function(city,country){
//     console.log("my name is "+this.name+" i am coming from "+city+country)
//   }
// }; 

// main=person.greet.bind(person,"calicut")
// main("india")






// function process(callback){
//   callback();
// }
//  function say(){
//   console.log("hyyy a")
// };
// process(say);






// function process(callback) {
//   callback();
// }

// process(function() {
//   console.log("Function passed as argument!");
// });
// // Output: Function passed as argument!



// function sayhello(callback){
//        callback();
// }
// function newsay(){
//   console.log("this is a call back function");
// }
// sayhello(newsay);





// function sayhello(callback){
//   setTimeout(callback, 2000);  // Executes the callback after a delay of 2 seconds
// }

// function newsay(){
//   console.log("This is a callback function (asynchronous)!");
// }

// sayhello(newsay);  // Passing the function 'newsay' as a callback


// function process(callback){
//   callback();

// }
// process(function(){
//   console.log("hyyy world");

// });




// function sample(callback){
//   callback();
// }
// function newcallback(){
//   console.log("this is a call back function");

// }
// sample(newcallback);





// function outer(number){
//   return function(factor){
    
//     return number+factor
//   }


// }
// const sum=outer(2)
// const sum1=outer(2)

// console.log(sum(5));
// console.log(sum1(10))



// var map = new Map();
// map.set('name','marjan');
// map.set('name','savad')


// console.log(map.get('name'));
// console.log(map.get('name'))



// function parent(value){
//     return  function (value1){
//      return value*value1;
//   }

// }
// var sum=parent(5);
// var sum1=parent(10);

// console.log(sum(2));
// console.log(sum1(10));







// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullname: function(){
//     return this.firstName+ " "+this.lastName
//   }
// };

// console.log(person.fullname())

// function person(name,age){
//   this.name=name,
//   this.age=age,
//   this.greet=function(){
//     console.log("hello my name is "+this.name)
//   }
// }
// let person1=new person("john ",35);
// person1.greet();


// let person = function(name){
//   return "hello i am "+name;

// }
// console.log(person("marjan"))



// function person(callback){
//     callback();
// }
// function main(name){
//   console.log("my name is "+name)
// }
// person(main("marjan"))





// function person(callback) {
//   callback();
// }

// function main(name) {
//   console.log("my name is " + name);
// }

// person(function() {
//   main("marjan");
// });


// function outer(){
//   return function(){
//     console.log("i am return fucntion");
//   }
// }

// var inner=outer();
// inner();










// let numbers =[10,5,8,3,15];
// numbers.sort((a,b) => a-b);
// console.log(numbers);







// let person ={
//   name:'marjan',
//   age:'22',
//   palce:'kannur',

// };
// for(let key in person){
//   if(key==='name'){
//     console.log(key +":"+ person[key]);
//   }
//   }
  


// let fruits=['apple','orange','banana','apple'];
// for(let index in fruits){
//   console.log(index +":"+fruits[index]);
  
// }




// let person={
//   name:'marjan',
//   age:25,
//   palce:'kannur',
// }
// for(let key in person){
//   if(key==='name'){

 
//   console.log(key+":"+person[key]);
// }
// }



// let fruits=['apple','orange','banana','apple'];
// for(let index in fruits){
//   console.log(index+":"+fruits[index]);
// }




// let fruits=['hello','how are you'];
// for(let first of fruits){
//   console.log(first);
// }





// let array=[12,16,10,2,33];{
// array.sort((a,b)=> a-b);
// console.log(array)
// }



// function outer(){
//   return function(){
//     console.log("i am return fucntion");
    
//   }
// }
// var inner=outer();
// inner();



// var sample=['apple','orrange','banana'];
// for(let total of sample){
//   console.log(total);
// }





// let numbers = [1, 2, 3, 4];

// let doubled = numbers.filter(function(num) {
//   return num > 2;
// });

// console.log(doubled);

// // Output: [2, 4, 6, 8]
// console.log(numbers);





// let numbers =[20,22,33,34,45];
// let doubled=numbers.map(function(number){
//     return number*2;
// });

// console.log(doubled)





// let word ="hello";
// let result =[...word].map(char => char.toUpperCase());
// console.log(result);




// let numbers=[1,2,3,4,5];

// let final=numbers.filter(function(num){
//      return num>4;
// });
// console.log(final);





// let arr=[1,2,3,4,5,6,7,8,9,10];
// sum=0;
// for(i=0;i<arr.length;i++){
  
//   sum+=arr[i];

// }
// console.log(sum);







// const arr=[1,2,3,4,5];
//     const arr1=arr.reduce((a,b)=>a+b,0);
//     console.log(arr1);








  //    function greet(name,place){
  //     console.log("hello "+name+place);
  //    }

  //  function processuserinput(calback){
  //  let username ="alice";
  
  //  calback(username);
  // }
  //    processuserinput(greet)


     



  // function sayhello(callback){
  //   callback();
  // }
  // function main(){
  //   console.log("i am call back function")

    
  // }
  // sayhello(main);










//   let str = "hello i am azarudheen";
// let words = str.split(" ");  // Split the string into an array of words
// let longestWord = words.reduce(function(a, b) {
//   return a.length > b.length ? a : b;  // Compare lengths and return the longest
// });

// console.log(longestWord);  // Prints: javascrift




// function sample(name){
//    console.log("hello i am"+name);
// }
// function first(callback){
//    let personname="savad";
//    callback(personname);
// }
// first(sample)






// function sample(name){
//   console.log("hello my name is"+name);
  
// }
// function main(callback){
//   let full="john";
//   callback(full)

// }
// main(sample);







// let arr=[1,2,3,4,5];
// let newarr=arr.reduce((a,num)=>a+num,0);
//  console.log(newarr);



// let arr=[1,2,3,4,5];

// let newarr=arr.reduce((a,num)=>a+num,0);
//   console.log(newarr)








// const arr=[1,2,3,4,5];
//     const arr1=arr.reduce((a,b)=>a+b,0);
//     console.log(arr1);


// let word ="hello";
// let result =[...word].map(char => char.toUpperCase());
// console.log(result);


// let namee="hello";
// let result=[...namee].map(char =>char.toUpperCase());
// console.log(result)



// let numbers=[1,2,3,4,5];
// let result=numbers.map(function(num){
//   return num*5;



// });

// console.log(result)
// console.log(numbers)





// let numbers=[1,2,3,4,5];
// let result=numbers.reduce((num) =>{
//   return num*2;

// });
// console.log(result)




// let numbers=[1,2,3,4,5,6,7,8,9,10];
// let result=numbers.reduce((total,num)=>{
//   return total+num;
// });
// console.log(result)





// let numbers=[1,2,3,4,5,6,7,8,9,10];
// let result=numbers.reduce((total,num)=>total+num,0);
// console.log(result)




// const arr=[1,2,3,4,5];
//     const arr1=arr.reduce((a,b)=>a+b,0);
//     console.log(arr1);



// const numbers=[1,2,3,4,5,6,7,8,9,10];
// const result=numbers.reduce((sum,num)=>{
//   return sum+num;
// });
// console.log(result);








// let fruits=[1,2,3,4,5,6];

// var result=fruits.map(function(num){
//   return num+2;
// });
// console.log(result);



// let fruits=[1,2,3,4,5,6,7,8,9,10];

// function sample(callback){
//   var last=fruits.map(callback);
//   console.log(last);

// }
// function result(num){
//   return num*2;
// }
// sample(result);






// const arr=[1,2,3,4,5];
//     const arr1=arr.reduce((a,b)=>a+b,0);
//     console.log(arr1);



// let numbers=[1,2,3,4,5,6,7,8,9,10];
// let result=numbers.reduce((total,num)=>{
//   return total+num;
// });
// console.log(result)




// let numbers=[1,2,3,4,5,6,7,8,9,10];
// let result=numbers.reduce((sum,num)=>sum+num,0);
// console.log(result)


// var numbers=[1,2,3,4,5,6,7,8,9,10];
// var result=numbers.reduce((sum,num)=>{
//  return num+sum;
// });
 

  

// console.log(result);



// var numbers=[1,2,3,4,5];
// var result=numbers.map(num =>{
//           return num+2;
// })
// console.log(result)





// var numbers=[1,2,3,4,5,6,7,8,9,10];
// var result=numbers.filter(function(num){
//    return num>5;
// });
//    console.log(result)



// let numbers=[1,2,3,4,5,];
// var sum=0;
//      numbers.forEach(function(num){
//        sum+=num
 
// });
// console.log(sum)





// let numbers = [1, 2, 3, 4, 5];
// let sum = 0; // Initializing sum variable

// numbers.forEach(function(num) {
//   sum += num; // Add each number to sum
// });

// console.log(sum); // Output: 15



// let number=[1,2,3,4,5];
// sum=0;
// number.forEach(num => {
//    sum+=num;
// })
// console.log(sum)



// let numbers=[1,2,3,4,5];
// var result=numbers.reduce((sum,num)=>sum+num,0);
// console.log(result);


// let numbers=[1,2,3,4,5];
// var result=numbers.filter(num =>{
//   return num>4;
// })
//   console.log(result)



// function sample(callback,name){
  
//   callback(name);

// }
// function main(name){
//   console.log("i am a call back function"+name);
// }

// sample(main , " marjan");




// function sample(name,calback){
//   console.log("hello "+name)
//  calback();


// }
// function sayGoodbye(){
//  console.log("my name is  muhammad marjan");
   
// }
// sample("marjan",sayGoodbye);




// function sample(callback,name) {
//   callback(); // This is where the passed function is executed
// }

// function main() {
//   console.log("my name is muhammad marjan");
// }

// sample(main); // 'main' is passed as a callback to 'sample'



// function sample(name,place){
//   console.log("my name is "+name+place);

// }
// function main(sample,place){
    
//    var personname="marjan";
//    sample(personname,place);
// }
// main(sample," new york");





// function sample(name){
//   console.log("my name is"+name)
// }
// function main(sample){
//   var personname=" john";
//   sample(personname)
// }
// main(sample)



// function sample(name,callback){
//   console.log("hello"+name);
//   callback();

// }
// function main(){
//   console.log("my name is")
// }
// sample("muhammad marjan",main)










// function sample(name,calback){
//   console.log("hello "+name)
//  calback();


// }
// function sayGoodbye(){
//  console.log("my name is  muhammad marjan");
   
// }
// sample("marjan",sayGoodbye);








// function sample(name,calback){
//   console.log("hello"+name);
//    calback();
// }
// function main(){
//   console.log("good bye");
// }
// sample("marjan",main)




// function sample(name){
//   console.log("my name is"+name);
// }
// function main(){
//   var total=" marjan";
//   sample(total);
// }
// main(sample);





// function sample(name,calback) {
//   console.log("my name is" + name);
//  calback();
// }

// function main() {
//    console.log("good bye");
// }

// sample("marjan",main);  // Passing 'sample' as the parameter to 'main'



// function sample(name, callback) {
//   console.log("my name is" + name);
//   callback();  // Calling the callback function
// }

// function main() {
//   console.log("good bye");
// }

// sample("marjan", main);  // Passing 'main' as the callback function to 'sample'




// function greet(name) {
//   return function() {
//     console.log("Hello, " + name);
//   }
// }

// function main() {
//   var greetUser = greet("Marjan");  // greet returns a function
//   greetUser();  // Call the returned function
// }

// main();
// which part is  returning function

 

function main(x){
  return function(){
    return x+y

  }
}
var total=main()