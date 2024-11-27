'use strict'
//alert,prompt,confirm

//alert("Hello");
//let age = prompt('how old are you?' , 26);
//alert(`you are ${age} years old!`);
//let isBoss = confirm("are you the boss here??");
//alert(isBoss);
//const name = prompt("enter your name");
//alert(name);
//const flag = confirm("Are you sure to delete this item?");
//if(flag){
//  alert("Item was deleted");
//}

//משתנים 

//let name='John', admin=name;
//console.log(admin);

//Data types

//let str1 = 'xxx';
//let str2 = 'yyy';
//let txt =  `aaa ${str1} bbb ${str2} ccc`;
//console.log(txt);

//let age = prompt ("what is your age?");
//alert(`your age is ${age}`);

//console.log(typeof undefined)
//console.log(typeof 0)
//console.log(typeof 10n)
//console.log(typeof true)
//console.log(typeof "foo")
//console.log(typeof Symbol("id"))
//console.log(typeof Math)
//console.log(typeof null)
//console.log(typeof alert)
//console.log(typeof function(){})
//console.log(typeof {})
//console.log(typeof Nan)

//const flag = true;
//const num = 123;
//const str = "Hello";
//const txt = "true";

//console.log(flag);
//console.log(num);
//console.log(str);
//console.log(txt);

//let number = 12345;
//let digitCount = number.toString().length;
//console.log(digitCount);

//let a = 1;
//alert(2* ++a);

//let value = prompt('what is the "official" name for JavaScript?', '');
//if(value == 'ECMAScrpit'){
  //alert('true!');
  //}else{
    //alert('don\'t know? ECMAScript!')
  //}

  //let value = prompt('enter a number', 0);
  //if(value > 0){
    //alert(1);
  //}else if (value < 0){
    //alert(-1);
  //}else{
    //alert(0);
  //}

 //let i = 0;
 //while(++i < 5) console.log(i);

 //const checkNumExp = function(x){
  //if(x>0)
    //console.log("+++");
  //else
    //console.log("---")
 //};
 //checkNumExp(-4)
 //checkNumExp(6)

 //const getSum = function(x,y,z){
  //console.log(x+y+z)
 //};
 //getSum(1,2,3)

 //function func(num = 5){
  //console.log(num * num);
 //}
//func (2);
//func (3);
//func();

//function func(num1=0, num2=0){
  //console.log(num1 + num2);
//}
//func(2,3);
//func(3);
//func();

//let cars = ["bmw", "audi", "mazda"];
//alert(cars.length);
//alert(cars[2]);

//let arr =[1,2,3];
//arr.push(4,5);
//alert(arr);

//let arr=[1,2,3];
//for(let i=0; i<arr.length;i++)
  //arr[i]++;
//console.log(arr);

//const greet = name => "Hello, " + name + "!";
//console.log(greet("Kate"));

//const formatName = (firstName, lastName) => lastName.toUpperCase() + "," + firstName[0].toUpperCase() + firstName.slice(1);
//console.log(formatName("shahaf " , "david"));

//let func1 = () => console.log('!!!')
//func1();

//let result = filter([1,2,3,4,5], elem => elem>0);

//const fruits = ['apple', 'banana', 'cherry'];
//fruits.forEach(fruits => console.log(fruits));

//const greetings = ['hello','world','javascript'];
//const arr = greetings.map(elem => elem.toUpperCase())
//console.log(arr);

//let arr = ['a','b','c','d','e'];
//arr.splice(0,3);
//alert(arr);

//let arr = ['a','b','c','d','e'];
//arr.splice(2,1, '1','2','3');
//console.log(arr);

//let arr = ['d','b','a','c'];
//arr.sort().reverse()
//console.log(arr);

//let str = '123456789';
//let arr1=str.split('');
//let arr2=arr1.reverse();
//let res = arr2.join('');
//console.log(res);

//let arr=[1,2,3,4,5];
//let sum=0;
//arr.forEach(function(elem){
  //sum+=elem**2;
//});
//console.loh(sum);

//let arr = [1,2,3]
//arr.forEach(function(element,index,arr){
//return (arr[index]=element+1);
//});
//console.log(arr);

