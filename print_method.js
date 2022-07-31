// 1 ------------ways to print in java script--------------
//alert("me")                     // now a days not use.
document.write("thise is my documeant")  
// on display
//*java script console API(application programing interface)
//console.log("hello world", 5 + 5 + 5 + 5, "hello another log")         // output on console
//console.warn("this is yhe final warning")
//console.error("Write ones again this is an error")
//console.assert(5 == 6);               // is we want to see the error in console then [assert] is use
//----------------------------------------------------------------

// 2- java script variables 
//  it's mean containers to store data values,"to make container we use {var}".
// var a = 10;
// var b = 10;
// // console.log(a+b);
// //-----------------------------------------------------

// // 3- data type 
// var num = 2;                // var is the data type "number data type"
// var string = "my name is kunal"  // "it is the string data type"{we can also write in single('')}
// // console.log(num)
// // console.log(string)
// // object data type
// var marks={
//     kunal: 99.956,
//     ankit: 56.65,
//     shyam: 89.6
// }
// console.log(marks);

// booleans data type
// var a = true;
// var b = false;
// // console.log(a,b)                 

// undefiend and null data type
// var und = undefined;
// console.log (undefined) 
// console.log (und)
// no values in undefiend ex
// var und
// console.log(und)
// for null
// var n = null
// // console.log(n)

// /*
// There are twotypes of data type
// 1) primative data type - independent
//  ex - undefined,null,number,string,booleans,symbols
// 2) Reference data type - arrays and objects
// */
// var arr = [5,7,6,2,8,6,9]
// // console.log(arr[2]);         // [2] shows the posation of the number 
// // -----------------------------------------------------------

// //operators
// var g = 3;
// var s = 9;
// Arithmetic opertors  AND SO ONNNNNNNNNNNNNNNNNN
// console.log("The additon of two numbwr is", g+s);

// Assignment Operators //AND SO ONNNNNNNNNNNNNNNNNNNNNN
// var c = g;
// c += 2                                //+=,-=
// console.log(c)

// //compression opertors  //  AND SO ONNNNNNNNNNNNNNNNNNNNN
// var q = 52;
//var t = 49;
//console.log(q<=t)

//logical (and) opertors
// console.log(true&&true);               
// console.log(true&&false);            // only this one is true.
// console.log(false&&true);
// console.log(false&&false)
// //logical (or) opertors
// console.log(true||true);               
// console.log(true||false);            
// console.log(false||true);
// console.log(false||false)            //  this one is false.
// //logical (not)opertors
// console.log(!true);               
// console.log(!false);                 // inverse of any given value

//Functions
//dry - do not repeate your self
// function avg(a,b)
// {c = (a+b)/2;
// return c;
// }
// c1 = avg (2,3);
// c2 = avg (98,47);
// console.log(c1,c2);
//  ----------------------------------------------------
//conditional 
//1) single if statemeant
// var a =22;
// if(a>21)
// {
//     console.log("you are a not a kid")
// }
// else{
//     console.log("you are a kid")
// }
//2) multiple statemeant
// var a = 24.5
// if ( a < 16){
//     console.log("you are not a kid")
// }
// else if(a < 16){
//     console.log("you are a kid")
// }
// else if(a >= 24 ){
//     console.log("you are a old")
// }
// else(
//     console.log("you are adult")
// )
// console.log("end of ladder")
//  -------------------------------------------------------
// loops
//1) for loop
//var arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr);
// for( i = 0;i<arr.length;i++)
// {
//     console.log("iterator" + i);
//     console.log(arr[i])
// }
//2) while loop
//let a = 10
// while(a < arr.length)
// {
//     console.log(arr[a])
//     a++;
// }
//3) Do while loop
//do{
// console.log(arr[a])
// a++
//}
//while(a>arr.length);
//---------------------------------------------------------

//break and continue
// var arr=[1,2,3,4,5,6,7]
// for(i=0;i<arr.length;i++){
//     if(i==1)
//     {
//         //break;                      //the loop will stop after 1
//         //continue;                     //the given  number delet the index number 
//     }
//    console.log(arr[i])
// }
//---------------------------------------------------------
let a=["kunal",25,"shyam","apend"];   
console.log(a) 
for(i=0;i<a.length;i++){
 console.log(a[i])
 

}
 


console.log(a.length);