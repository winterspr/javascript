//console.log('hello');
//console.log("I Liked Fizza");
//window.alert("This is an alert");
//window.alert("I liked pizaa");
 
//let x=43;
//console.log(`my age is ${x}`);
//document.getElementById("myh1").textContent = "Hello";
//document.getElementById("myP").textContent = "Mywbsite";

//let username;
//username = window.prompt("What is you name?");
//console.log(username);

// let username;
// document.getElementById('btn').onclick=function(){
//     username = document.getElementById('usename').value;
//     console.log(username);
//     document.getElementById('text').textContent = `hello ${username}`;
// }

// 

// const mycheckbox = document.getElementById("mycheckbox");
// const visabtn = document.getElementById('visabtn');
// const blackcbtn = document.getElementById('blackcbtn');
// const paypalbtn = document.getElementById('paypalbtn');
// const mysubmit = document.getElementById('mysubmit');
// const subresult = document.getElementById('subresult');
// const paymentresult = document.getElementById('paymentresult');

// mysubmit.onclick = function(){
//     if(mycheckbox.checked){
//         subresult.textContent = `You are subscribled`;
//     } else{
//         subresult.textContent = `You aren't subscrible`;
//     }
// }

// let min = 1;
// let max = 100;
// let result = Math.floor((min+max)/2+1);
// let guess;
// let attempts=0;
// let running = true;

// while(running){
//     guess = window.prompt("please to enter a number!");
//     guess = Number(guess);
//     if(isNaN(guess)){
//         window.alert("please to enter again!");
//     } else if(guess < min || guess > max){
//         window.alert("please to enter again!");
//     } else{
//         attempts++;
//         if(guess<result){
//             window.alert("little taller");
//         } else if(guess>result){
//             window.alert("little smaller");
//         } else {
//             window.alert("bingo.you sucess in guess ");
//             running = false; 
//         }
       
//     }
// }

// const textBox = document.getElementById("textBox");
// const toFahrenheit = documnet.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");
// let temp;

// function convert(){
//     if(toFahrenheit.checked){
//         result.textContent="Convert Celsius to Fahrenheit";
//     } else if(toCelsius.checked){
//         result.textContent="Convert Fahrenheit to Celsius";
//     } else {
//         result.textContent= "choose a unit";
//     }
// }

//ARRAY
// let fruits = ["orange", "banana", "strawberry"];
// fruits[2] = "blueberry";
// fruits.push("apple");
// fruits.pop("apple");
// fruits.unshift("mango");
// fruits.shift();
// //  console.log(fruits[0]);
// //  console.log(fruits[1]);
// //  console.log(fruits[2]);       
// //  console.log(fruits[3]);


// let lengths = fruits.length;
// for(let i = 0; i<lengths; i++){
//     console.log(fruits[i]);
// }

// //can use a different ways in this case by creating a shortcut
// for (let fruit of fruits){
//     console.log(fruit);
// }
// let index = fruits.indexOf("blueberry");
// console.log("index of its is: " + index);
// console.log(lengths);


//spread operator: allow a iterable such as a array or string 
//can be expanded into separate elements

// let number = [1,2,3,4,5];
// let maxval = Math.max(number); //Normally, the result is a array so it is impossiblr to find the max
// //, so we need to add a sign ... to expand the uniqueness of the element.
// let maxval1 = Math.max(...number);
// console.log(maxval);
// console.log(maxval1);

// let username = "dong";
// let username1 = [...username].join("-");
// console.log(username1);


//rest parameters: allow a function work with a variable 
//number of arguments by bundling them into an array

// function bundling(...foods){
//     console.log(...foods);
// }

// function getval(...foods){
//     return foods;
// }


// let foods1 = "apple";
// let foods2 = "banana";
// let foods3 = "mango";

// bundling(foods1, foods2, foods3);

// let foods = getval(foods1, foods2, foods3);

// console.log(foods);

// function sum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result+=number;
//     }
//     return result;
// }

// const val = sum(1,2,3,4,5);
// console.log(`total is $${val}`);
// function combine(...strings){
//     return strings.join(" ");
// }

// let result = combine("Do", "Xuan", "Dong");
// console.log(result);


//Dice roller program
// function roll(){
//     const numberdice = document.getElementById("number").value;
//     const result = document.getElementById("result");
//     const img = document.getElementById("img");
//     const values = [];
//     const images = [];
//     for(let i=0; i<numberdice; i++){
//         const value = Math.floor(Math.random()*6 + 1);
//         values.push(value);
//         images.push(`<img src="img_dice/${value}.png">`);
//     }
//     result.textContent=`dice: ${values.join(", ")}`;
//     img.innerHTML = images.join("");
// }



// function checkpassword(length, includeLowercase, includeUppercase, includeNumber, includeSymboys){
//     const Lowercase = "abcdefghiklmnopqrstuvwxyz";
//     const Uppercase = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
//     const Number = "0123456789";
//     const Symboys = "@!$";

//     let allowedChars = "";
//     let password = "";

//     allowedChars += includeLowercase ? Lowercase : "";
//     allowedChars += includeUppercase ? Uppercase : "";
//     allowedChars += includeNumber ? Number : "";
//     allowedChars += includeSymboys ? Symboys : "";

//     if(length <= 0){
//         return `password length must be at least 1`;
//     }
//     if(allowedChars.length===0){
//         return `at least one 1 set of character need to be selected`;
//     }

//     for(let i=0; i<length; i++){
//         const random = Math.floor(Math.random() * allowedChars.length);
//         password += allowedChars[random];
//     }
//     return password;

// }
// const length = 12;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumber = true;
// const includeSymboys = true;

// const password = checkpassword(length, includeLowercase, includeUppercase, includeNumber, includeSymboys);

// console.log(password);

//callback: a function that is passed as an argument to another function

// sum(display, 1, 2);

// function sum(callback, x, y){
//     let result = x+y;
//     callback(result);
// }

// function display(result){
//     console.log(result);
// }



//forEach() : method used to iterate over the elements os an array and
//            apply a specified function(callback) to each element
//            array.forEach(callback);
//            element index array are provided;
// let number = [1,2,3,4,5];

// number.forEach(double);
// number.forEach(display);
// function double(element, index, array){
//     array[index] = element * 2;
// }
// function display(element){
//     console.log(element);
// }



//map() : accepts a calback and applies that function to each element 
// of an array , then return a new array;

// let fruits = ["banana", "apple", "strawberry", "blueberry"];
// fruits.map(upper);
// fruits.map(display);

// function upper(element, index, array){
//     array[index] = element.toUpperCase();
// }
// function display(element){
//     console.log(element);
// } 



//.filter() : creates a new array by filtering out elements
// let number = [1,2,3,4,5];
// let newnumber = number.filter(isEven);
// console.log(newnumber);
// function isEven(element){
//     return element % 2 === 0;
// }

// let number = [15,25,35,45,55];

// const maxv = number.reduce(getmax);

// console.log(maxv);

// function getmax(accumulator, element){
//     return Math.max(accumulator,element);
// }


// function declaration = define a reusable block of code that perform a
//                              specific tags
// function expressions = a way to define function as values or variables
// setTimeout(function(){
//     console.log("hello");
// }, 3000)



//arrow function: a concise way to write function expressions good for 
//              simple function that  you use only once (paramsters) => some code

// const hello = (name, age) => {console.log(`My name is ${name}`)
//                      console.log(`My age is ${age}`)    
//                     }
// hello("Dong", 21);



//objects: A collection of related and/or methods can represent real word 
//          objects (people, products, places)
//          object = {key: value, function}

// const person1={
//     name: "Dong",
//     age: 21,
//     isEmployed: true,
//     display: function(){
//         console.log(`My name is ${this.name}, i'm ${this.age} years old`)
//     },
// }

// const person2={
//     name: "thao",
//     age: 45,
//     display: (name,age) => {console.log(`My mother is ${name}, she is ${age}`)},
// }

// person1.display();
// person2.display();


// function Car(make, mode, year, color){
//     this.make = make;
//     this.mode = mode;
//     this.year = year;
//     this.color = color;
// }

// const car1 = new Car("Ford", "Mustang", 2024, "red");
// const car2 = new Car("lambo", "buff", 2023, "yellow");
// console.log(car1.make);
// console.log(car1.mode);
// console.log(car2.year);
// console.log(car2.color);



//class: provides a more structured and cleaner way to work with objects 
//      compared to traditional constructor function ex: static keyword,
//      encapsulation, inheritance

// class Product{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }

//     display(){
//         console.log(`this product is${this.name} and this cost od it is ${this.price.toFixed(2)}`);
//     }

//     calculate(sale){
//         return this.price + sale;
//     }
// }

// const product1 = new Product("volvo", 19.99);
// const product2 = new Product("lambo", 20.00);

// product1.display();
// product2.display();
// const total = product1.calculate(1.2);
// console.log(total.toFixed(2));



//static: defines properties or methods that belong to a class itself 
//rather than the objects created from that class(class owns anything static not the objects)
// class User{
//     static user = 0;
//     constructor(username){
//         this.username = username;
//         User.user++;
//     }
//     SayHello(){
//         console.log(`my user name is ${this.username}`);
//     }
// }

// const user1 = new User("Dong");
// const user2 = new User("Huy");
// const user3 = new User("Cuong");
// const user4 = new User("Qanh");
// user2.SayHello();
// console.log(user1.username);
// console.log(User.user);



//inheritance: allow a class can be used properties or method of an existing
//class (parent -> children) helps with code reuseabe;
// class Animal{
//     alive = true;
//     eating(){
//         console.log(`this ${this.name} is eating`);
//     }
//     sleeping(){
//         console.log(`this ${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal{
//     name = "rabbit";
//     running(){
//         console.log(`this ${this.name} is running`);
//     }
// }

// class Fish extends Animal{
//     name = "fish";
// }
// const rabbit = new Rabbit();
// const fish = new Fish();

// console.log(rabbit.alive);
// rabbit.eating();
// rabbit.sleeping();
// rabbit.running();
// fish.eating();
// //but don't use fish.ruuning() because it isn't inheritated;



//super: is used in classes to call the contructor or access the properties
// and method of a parent this = this object, super = the parent

// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// class Rabbit extends Animal{
//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }
// }

// class Fish extends Animal{
//     constructor(name, age, swimSpeed) {
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }
// }

// const rabbit = new Rabbit("dong", 1, 12);
// const fish = new Fish("huy", 2, 13);

// console.log(rabbit.name);
// console.log(fish.age);



//getter = special method that makes a property readable
//setter = special method that makes a property writeable

// class Person{
//     constructor(firstname, lastname, age) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//     }

//     set firstname(newfirstname){
//         if(typeof newfirstname === "string" && newfirstname.length > 0){
//             this._firstname = newfirstname;
//         } else {
//             console.error("firstname must be a non-empty string");
//         }
//     }

//     set lastname(newlastname){
//         if(typeof newlastname === "string" && newlastname.length > 0){
//             this._lastname = newlastname;
//         } else {
//             console.error("lastname must be a non-empty string");
//         }
//     }

//     set age(newage){
//         if(typeof newage === "number" && newage >0){
//             this._age = newage;
//         } else {
//             console.error("age must be a non-empty number");
//         }
//     }

//     get firstname(){
//         return this._firstname;
//     }

//     get lastname(){
//         return this._lastname;
//     }
//     get age(){
//         return this._age;
//     }
// }

// const person1 = new Person("do", "dong", 21);
// const person2 = new Person("pham", "huy", 21);

// console.log(person1.firstname);
// console.log(person2.age);



//desstructuring: extract values from arrays and objects then assign them to 
//variabless in a convenient way
//      [] = to perform array object destructuring
//      {} = to perform object destructuring

// let a = 2;
// let b = 5;
// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// let a = ["g", "c", "e", "f", "c"];
// let [first, second, third, ...extra] = a;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(...extra);


// const person1 = {
//     firstname : "dong",
//     age : 20,
//     job : "software-developer",
// }

// const person2 = {
//     firstname : "huy",
//     age : 20,
// }

// function display({firstname, age, job="employee"}){
//     console.log(`name: ${firstname}`);
//     console.log(`age: ${age}`);
//     console.log(`job: ${job}`);
// }

// display(person2);



//nested objects: objects inside of the other objects
//allows you to represent more complex data structures 
//child object is enclosed by a parent objects
//      person{address{}, contactinfo{}}
//      shoppingcart{keyboard{}, mouse{}, monitor{}}

// const person = {
//     fullname: "do xuan dong",
//     age: 21,
//     hobbies: ["films", "games", "code"],
//     address: {
//         province: "thai binh",
//         country: "Viet Nam",
//     }
// }

// for(const property in person.address){
//     console.log(property);
// }

// class person{
//     constructor(name, age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// class Address{
//     constructor(province, country){
//         this.province = province;
//         this.country = country;
//     }
// }

// const person1 = new person("dong", 21, "thai binh", "viet nam");
// console.log(person1);
// console.log(person1.address.country);



//array of objects
// const fruits = [{name: "apple", color: "red", calories: 95},
//                 {name: " orange", color:"orange", calories: 45},
//                 {name: "banna", color: "yellow", calories: 105},
//                 {name: "coconut", color: "white", calories: 159},
//                 {name: "pineapple", color: "yellow", calories: 37}
//                 ];
// console.log(fruits[0].name);
// fruits.forEach(fruit => console.log(fruits.name));
// const maxfruit = fruits.reduce((max, fruit) =>
//                                 fruit.calories > max.calories ?
//                                 fruit : max);
// console.log(maxfruit);

// const minfruit = fruits.reduce((min, fruit) => 
//                                 fruit.calories < min.calories ? 
//                                 fruit : min);
// console.log(minfruit);



//sort()
//let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

//let c = numbers.sort((a,b) => a-b);

//let d = numbers.sort((a,b) => b-a);

//console.log(c);

//console.log(d);

// const people = [
//     {name: "Dong", age: 21, gpa: 4.0},
//     {name: "cuong", age:22, gpa: 4.1},
//     {name: "huy", age: 23, gpa: 4.2}]

// people.sort((a,b) => b.age-a.age);
// //people.sort((a,b) => a.namelocaleCompare(b.name));
// console.log(people);



//date
//const date = new Date();
//console.log(date);



//Date objects = objects that contain values that represent dates and times
//these date onjectsd can be changed and formatted



//closure = a function defined inside of another function, the inner function
//has access to the variables and scope of the outer function.
//allow for private variables and state maintenance
//use frequently in js frameworks: React, Vue, Angular
// function outer(){
//     let message = "hello";
//     function inner(){
//         console.log(message);
//     }
//     inner();
// }
// message = "goodbye";
// outer();

// function createCounter(){
//     let count = 0;
//     function increment(){
//         count++;
//         console.log(`Count increased to ${count}`);
//     }
//     function getcount(){
//         return count;
//     }
//     return {increment, getcount};
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// console.log(counter.getcount());



//setTimeout(callback, delay);
//setTimeout(function(){window.alert("hello")}, 3000);
//setTimeout(()=>window.alert("goodbye"), 5000);



//digital clack program

// function Clock(){
//     const date = new Date();

//     let hour = date.getHours();
    
//     const condition = hour >= 12 ? "PM" : "AM";
//     hour = hour % 12 || 12;
//     hour = hour.toString().toString().padStart(2,0);
//     let minute = date.getMinutes().toString().padStart(2,0);
//     let second = date.getSeconds().toString().padStart(2,0);
//     let display = `${hour}:${minute}:${second} ${condition}`;

//     document.getElementById("clock").textContent = display;
// }

// Clock();
// setInterval(Clock, 1000);



//Stopwatch program
// const counter = document.getElementById("counter");
// let timer = null;
// let starttime = 0;
// let elapsedtime = 0;
// let isRunning = false;

// function start(){
//     if(!isRunning){
//         starttime = Date.now() - elapsedtime;
//         timer = setInterval(update, 10);
//         isRunning = true;
//     }
// }

// function stop(){
//     clearInterval(timer);
//     elapsedtime = Date.now() - starttime;
//     isRunning = false;
// }

// function reset(){
//     clearInterval(timer);
//     //phương thức clearInterval() được sử dụng để dừng việc thực thi một hàm định
//     //kỳ đã được đặt bằng phương thức setInterval(). Khi gọi hàm clearInterval()
//     // với một ID của Interval nó sẽ hủy bỏ việc thực thi lặp lại của hàm đó
//     elapsedtime = 0;
//     counter.textContent = "00:00:00:00";
// }

// function update(){
//     const currenttime = Date.now();
//     elapsedtime = currenttime - starttime;

//     let hours = Math.floor(elapsedtime / (1000*60*60));
//     let minutes = Math.floor(elapsedtime / (1000*60) % 60);
//     let seconds = Math.floor(elapsedtime / 1000 % 60);
//     let miliseconds = Math.floor(elapsedtime % 1000 / 10);

//     hours = hours.toString().padStart(2,0);
//     minutes = minutes.toString().padStart(2,0);
//     seconds = seconds.toString().padStart(2,0);
//     miliseconds = miliseconds.toString().padStart(2,0);

//     counter.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
// }



//ES6 Module = An external file that contans reusable code that can imported
// into other js files. Write reusable code for many different apps. Can
//contain var, classes funcs...and more introduced as part of ECMAcript 2015 update
// dùng import{những hàm chung bên một file js khác vd:math.js} from './math.js';



//calculator program
// const display = document.getElementById("display");

// function appendtoDisplay(input){
//     display.value += input;
// }

// function clear(){
//     display.value = "";
// }

// function calculate(){
//     try{
//         display.value = eval(display.value);
//     } catch{
//         display.value = "Error";
//     }
// }



//element selectors: methods used to target and manipulate html elements
//they allow you to select one or multiple html elements from the dom
//1.    document.getElementById()           //ELEMENT OR NULL   
//2.    document.getElementsClassName()     //HTMl COLLECTION
//3.    document.getElementByTagName()      //HTML COLLECTION
//4.    document.querySelector()            //FIRST ELEMENT OR NULL
//5     document.querySelectorAll()         //nODELIST

// const d1 = document.getElementById("d1");
// d1.style.backgroundColor = "yellow";
// d1.style.color = "white";
// d1.style.textAlign = "center";
// console.log(d1);

// const fruits = document.getElementsByClassName("fruits");
// for(let fruit of fruits){
//     fruit.style.backgroundColor = "yellow";
// }

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "green";
// })

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");
// Array.from(h4Elements).forEach(h4Element => {
//     h4Element.style.backgroundColor = "yellow";
// })
// Array.from(liElements).forEach(liElement => {
//     liElement.style.backgroundColor = "lightgreen";
// })

// const element = document.querySelector(".fruits");
// element.style.backgroundColor = "yellow";



//DOM Navigation: the process of navigating through structure of an HTML
// document using Js

//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children                                 

// const element = document.getElementById("fruits");
// const firstchild = element.firstElementChild;
// firstchild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement => {
//     const firstelement = ulElement.lastElementChild;
//     firstelement.style.backgroundColor = "yellow";
// })

// const element = document.getElementById("orange");
// const nextElements = element.previousElementSibling;
// nextElements.style.backgroundColor = "yellow";



// eventListener = listen for specific events to create interactive web pages
//events: click, mouseover, mouseout;
//.addEventListener(event, callback);

// const myBox = document.getElementById("myBox");

// myBox.addEventListener("click", event=>{
//     event.target.style.backgroundColor = "lightgreen";
//     event.target.textContent = "Ouch";
// });

// myBox.addEventListener("mouseover", event=>{
//     event.target.style.backgroundColor = "yellow";
//     event.target.textContent = "Don't touch me";
// });

// myBox.addEventListener("mouseout", event=>{
//     event.target.style.backgroundColor = "red";
//     event.target.textContent = "Don't touch me";
// });



//eventListener: events: keydown, keyup
//               document.addEventListener(event, callback);

// const myBox = document.getElementById("myBox");
// const moveAmount = 10;
// let x = 0;
// let y = 0;
// document.addEventListener("keydown", event=>{
//     //console.log(`key down = ${event.key}`);
//     if(event.key.startsWith("Arrow")){
//         switch(event.key){
//             case "ArrowUp":
//                     y-=moveAmount;
//                     break;
//             case "ArrowDown":
//                     y+=moveAmount;
//                     break;
//             case "ArrowLeft":
//                     x-=moveAmount;
//                     break;
//             case "ArrowDown":
//                     x+=moveAmount;
//                     break;
//         }
//         myBox.style.top = `${y}px`;
//         myBox.style.left = `${x}px`;
//     }
// });



//classlist
// const myBox = document.getElementById("myBox");

// myBox.classList.add("class1");

// // myBox.addEventListener("click", event=>{
// //     event.target.classList.replace("class1","class2");
// // });

// myBox.addEventListener("click", event=>{
//     if(event.target.classList.contains("hover")){
//         event.target.texContent += "😃";
//     } else {
//         event.target.classList.replace("class1","hover");
//     }
// });



// myBox.addEventListener("mouseover", event=>{
//     event.target.classList.add("hover");
// });

// myBox.addEventListener("mouseout", event=>{
//     event.target.classList.remove("hover");
// })



//Rock-Paper-Scissors
// const choices = ["rock", "paper", "scissors"];
// const playerDisplay = document.getElementById('playerDisplay');
// const computerDisplayer = document.getElementById('computerDisplay');
// const resultDisplay = document.getElementById('resultDisplay');
// function playGame(playchoice){
//     const computerchoice = choices[Math.floor(Math.random()*3)];
//     let result = "";
//     if(playchoice === computerchoice){
//         result = "It's a TIE!";
//     } else{
//         switch(playchoice){
//             case "rock":
//                 result = (computerchoice === "scissors") ? "You Win" : "You Lose";
//                 break;
//             case "paper":
//                 result = (computerchoice === "rock") ? "You Win" : "You Lose";
//                 break;
//             case "scissors":
//                 result = (computerchoice === "paper") ? "You Win" : "You Lose";
//                 break;
//         }
//     }
//     playerDisplay.textContent = `Player: ${playchoice}`;
//     computerDisplayer.textContent = `Computer: ${computerchoice}`;
//     resultDisplay.textContent = result;
// }



//Image slide
// const slides = document.querySelectorAll(".slides img");
// let slideIndex = 0;
// let intervalId = null;

// //initializeSlider();
// document.addEventListener("DOMContentLoaded", initializeSlider);
// function initializeSlider(){
//     if(slides.length > 0){
//         slides[slideIndex].classList.add("displaySlide");
//         intervalId = setInterval(nextSlide, 5000);
//     }
    
// }

// function showSilde(index){
//     if(index >= slides.length){
//         slideIndex = 0;
//     } else if(index < 0){
//         slideIndex = slides.length - 1;
//     }
//     slides.forEach(slide=>{
//         slide.classList.remove("displaySlide");
//     });
//     slides[slideIndex].classList.add("displaySlide");
// }

// function prevSlide(){
//     clearInterval(intervalId);
//     slideIndex--;
//     showSilde(slideIndex);
// }

// function nextSlide(){
//     slideIndex++;
//     showSilde(slideIndex);
// }



//fetch data from an api
//fetch: function used for making http requests to fetch resources(Json style data, images, files)
//       Simplifiles asynchronous data fetching in JS and used for interacting with APIs to retrieve and send
//       data asynchronously over the web.
//              fetch(url, {options})

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("could not fetch resource");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data.name))
//     .catch(error => console.error(error));

// async function fetchData(){
//     try{
//         const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//         if(!response.ok){
//             throw new Error("Could not fetch resource");
//         }
//         const data = await response.json();
//         const pokemonSprite = data.sprites.front_default;
//         const imgElement = document.getElementById("pokemonSprite");
//         imgElement.src = pokemonSprite;
//         imgElement.style.display = "block";
    
//     }
//     catch(error){
//         console.error(error);
//     }
// }

// fetchData();



//Weather app project
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "ecbc2687249e63c475370e42f33260fd";
weatherForm.addEventListener("submit", async event=>{
    event.preventDefault();
    const city = cityInput.value;
    if(city){
        try{
           const weatherData = await getWeatherData(city);
           displayWeahterInfo(weatherData); 
        }
        catch(error){
            console.log.error(error);
            displayError(error);
        }
    } else {
        displayError("Please enter a city");
    }
});

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    //console.log(response);
    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }
    return await response.json();
}

function displayWeahterInfo(data){
    console.log(data);
    const {name:city,
            main:{temp, humidity},
            weather: [{description, id}]} = data;
    
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    card.textContent="";
    card.style.display = "flex";

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273).toFixed(1)}℃`;
    humidityDisplay.textContent = `Humidity: ${humidity}`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId){
    switch(true){
        case (weatherId >=200 && weatherId <300):
            return "⛈";
        case (weatherId >=300 && weatherId <500):
            return "🌧";
        case (weatherId >=500 && weatherId <600):
            return "🌨";
        case (weatherId >=600 && weatherId <700):
            return "❄";
        case (weatherId >=700 && weatherId <800):
            return "🌫";
        case (weatherId == 800):
            return "☀";
        case (weatherId > 800):
            return "☁";
        default:
            return "⁉";
    }
}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}