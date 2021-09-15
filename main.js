// --------------forEach--------------------------
// let arrayStr=["keren","eden","yafit","tikva"]
// arrayStr.forEach((element,index) =>{
// console.log(element);
// })
// arrayStr.forEach((element,index)=>{
//     console.log(`${index}: ${element}`);
// })
// let num=[1,2,3,4,5,6,7,8,9]
// num.forEach((number,index)=>{
//     if(number%2==0){
//         console.log(`${number}: zogi`);
//     }
//     else{
//         console.log(`${number}: no zogi`);
//     }
// })
// -------------- For-of---------------------
// for(const numbers of num){
//     console.log(numbers);
// }
// var obj=[{name:"keren",age:22,city:"yahod"},
// {name:"eden",age:24,city:"lod"},
// {name:"yafit",age:29,city:"tel-Aviv"},
// {name:"tikva",age:27,city:"ramle"},]
// for(const girls of obj){
//     console.log(girls.name);
//     console.log(girls);
// }

// -------------- For-if---------------------
// var object1={k:"keren",h:"hailu",age:22}
// for(const key in object1){
//     // console.log(key);
//     console.log( key + ": "+object1[key]);
// }
// ----------------------עבודת בית--------------------
// ------------------1------------------
// נתון מערך של כתבות: כותרת, מחבר, תאריך
//  הדפס את כל הכתבות בעזרת forEach
//  הדפס את כל הכתבות בעזרת forOf

// var arrayArticles=[{title:"Beautiful",author:"keren",date:"20.2.21"},
// {title:"book",author:"gila",date:"1.4.21"},
// {title:"red",author:"sapir",date:"8.7.21"}]
// arrayArticles.forEach((Wrotes,i)=>{
// console.log(Wrotes);
// })
// for(const Articles of arrayArticles){
//     console.log(Articles);
// }
// ------------------2------------------
// נתון מערך של אובייקטים
//  הדפס את כל ה- key וה-value של כל האובייקטים- שילוב לולאה + forIN

// var arrayObj=[{name:"keren",age:22,city:"yahod"},
// {name:"eden",age:24,city:"lod"},
// {name:"yafit",age:29,city:"tel-Aviv"},
// {name:"tikva",age:27,city:"ramle"},]

// for(const key in arrayObj){
// console.log(key,arrayObj[key]);
// }

// ------------------3------------------
// נתון מערך של 4 ספרים: שם, מחבר ומחיר:
//  הדפס את כל הספרים
// הדפס את כל המחברים של הספרים

// var arrayBooks=[{name:"girls",author:"keren",price:400},
// {name:"boys",author:"dvir",price:10},
// {name:"love",author:"avi",price:44},
// {name:"abc",author:"haim",price:222},]

// for(const item of arrayBooks){
// console.log(item.author);
// console.log(item.name);
// }

// ------------------4------------------
// נתון מערך של מספרים-  הדפס את סכום המערך:
//  בעזרת forEach
//  בעזרת for-of
// var arrayNumbers=[1,2,3,4,5,6,7,8,9]
// var sumForEach=0
// arrayNumbers.forEach((num,i)=>{
//     sumForEach=sumForEach+num
//     })
// console.log(sumForEach);
// let sumForOf=0
// for(const nums of arrayNumbers){
//     sumForOf=sumForOf+nums
// }
// console.log(sumForOf);
