// let obj ={
//     name:'Muneeb',
//     age:18,
//     Field: 'Software Engineering' 
// };
// console.log(obj)


// let obj = {
//     name:'Muneeb',
//     age:18,
//     field:'Software Engeneering',
//     greet:function()
//     {
//         console.log('Hn Bhai Kaise Ho Saare');

//     }
// };
//     console.log(obj) 
//     obj.greet() ;


// let obj = {
//     name:'Muneeb Khalsai',
//     age:18,
//     Field:'Software Engeneering',
//     greet:function(){
//             console.log('Hn Bhai Kaise Ho Saare ');
//     }

// }
// console.log(obj)
// obj.greet();


// Array In Javascript

// let arr = ['Muneeb', 18, 'Khalsai'];
// console.log(arr[2]);

// var brr = new Array('Muneeb',18, 'Khalsai');
// console.log(brr[1]);
// console.log(typeof(brr));

// Push And Pop in Array

// let arr =['Muneeb', 'Khalsai','18'];
// arr.push('Software Engeneering');
// arr.pop();
// console.log(arr);


// let arr = ['Muneeb' , 'Khalsai' , 22 , 'Software Engeneering' ];
// arr.shift();
// arr.unshift('Muneeb');
// arr.push(40);
// arr.push(99);
// arr.splice(1,0,'1) ')
// console.log(arr.slice(1,3));
// console.log(arr);


// Map In Array

// let arr=[10,20,30];
// let ansar = arr.map((number) => {
//     return number*number;
// })
// console.log (ansar);


// let arr=[10,20,30];
// let sumarr = arr.map((number)=>{
//     return number+1;

// })
// console.log(sumarr);

// let arr = [11,21,31,41];
// let sumarr = arr.map((number,index)=>{
//     return number+9;
// })
// console.log(sumarr);

// let arr = [10 , 20 , 30];
// arr.map((number, index)=>{
//     console.log(number);
//     console.log(index);
// })


// let arr =[10,20,30,15,25,55];
// let evenar= arr.filter((number)=>{
//     return number%2==0;


// });
// console.log(evenar);

// let arr= ['Muneeb' ,18,'Khalsai' , 2020];
// let strarr = arr.filter((String)=>{
//     return typeof arr =='String'
// });
// console.log(strarr);

// let arr =[10,20,30];
// let ans = arr.reduce((acc,curr)=>{
//  return acc+curr;
// });
// console.log(ans)


// let arr =[10,20,30,2,9 ];
// arr.sort();
// console.log(arr)
// console.log(arr.indexOf(9));

// let arr = [10,20,30,40];
// arr.forEach((value,index)=>{
//     console.log("Number:",value,"Index",index);
// })

// let arr = [1,2,3,5];
// arr.forEach((Number,Index)=>{
//     console.log('Number',Number,'Index',Index);
// })


// let arr =[1,2,3,4,5];
// let arrlen = arr.length;
// arr.push(9);
// arr.pop();
// console.log(arrlen);
// console.log(arr);

// let obj = {
//     name:'Muneeb',
//     age:18,
//     field:'Software Engeneering',
//     greet:function()
//     {
//         console.log('Hn Bhai Kaise Ho Saare');

//     }
// };
// for(let key in obj){
//     console.log(key,"" , obj[key]);
// }


// let arr =[10,20,30,40,90];
// for(let val of arr){
//     console.log(val);
// }


// let strarr = ["Muneeb"];
// for(let strg of strarr){
//     console.log(strg);
// }


// let arr = [10,20,30,40];
// let getSum = (arr)=>{
//     let sum = 0;
//     arr.forEach((value) => {
//         sum = sum+value;        
//     })
// return sum;

// }

// let totalsum=getSum(arr);
// console.log(totalsum);


// let arr = [1,2,3,4,5];
// let getsum = (arr)=>{
//     let sum = 0;
//     arr.forEach((value) => {
        
//         sum = sum + value;

//     })
//     return sum;

// }

// let totalsum = getsum(arr);
// console.log(totalsum);