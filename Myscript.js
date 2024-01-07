// let username="ATOZ";
// let locationserver="India";
// let version=4.5;
// console.log(username);
// console.log(locationserver);
// console.log(version);
// let s=5;
// let z=s;
// s++;
// z++;
// console.log("s++=",s);
// console.log("z++=",z);
// let num=10;
// if (num%2===0)
// {
//     console.log(num, "is  even");
// }
// else{
//     console.log(num,"is odd");
// }
// for (let count=1; count<=5;count++){
//     console.log("Code running");
// }
// let status="CODERUNNING";
// for(let i of status){
//     console.log("i=",i);
// }
// /*let userinput=prompt("Enter a number");
// let number=28;
// while(userinput!=number)
// {
//   userinput= prompt("You have entered wrong number. Try again");
// }
// console.log("you have successfully guess this number!");*/
// let str1="NAME";
// let obj={
//     name :"pen",
//     price:12,

// };
// console.log(`The cost of ${obj.name} is ${obj.price} repues`);

// let str="ranagaht";
// str1=(str.toUpperCase());
// console.log(str1);
// let str2="RANAGHAT";
// str3=(str2.toLowerCase());
// console.log(str3);
// let fullname=prompt(`Enter your full name withput space`);
// let result="@"+fullname+fullname.length;
// console.log(`your user id is ${result}`);
// let a=4;
// let b=5;
// function mul (a,b){
//     console.log(`a+b=${a+b}`);
//     return a+b;

// }
//  let arr=[15,45,65,78];
//   let sqrvalue=(arr)=>{
//     console.log(arr*2);
//   };
//   arr.forEach(sqrvalue);
//   let num=5;
//   let fact1=1;
//   for(let i=1;i<=num;i++){
//      fact1=fact1*i;
//   }
//     console.log(`fact is ${fact1}`);

//let element=window.document.body.style.background="Azure";
//console.dir(element);
// let bot=document.querySelector("h1")
// console.dir(bot);
// //let bot1=bot.innerText="OLD HEADING ";
// console.dir(bot1);

// let click=document.querySelector(".click");

// let mode = document.querySelector("#mode");
// let currmode = "light";
// mode.addEventListener("click", () => {
//   if (currmode === "light") {
//     currmode = "dark";
//     document.querySelector("body").style.backgroundColor = "Black";
//   } else {
//     currmode = "light";
//     document.querySelector("body").style.backgroundColor = "White";
//   }
//   console.log(currmode);
// });
const url="https://cat-fact.herokuapp.com/facts";
let about= document.querySelector("#first");
 const getfact= async()=>{
  console.log("DATACOMING");
  let res= await fetch(url);
  console.log(res);
  let data=  await res.json();
  about.innerText=data[0].text;
 };