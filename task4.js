//Task 1

/*
დაწერეთ ფუნქცია რომელსაც გადაეცემა მასივი და ეს ფუნქცია დაგვიბრუნებს
ამ მასივში ყველაზე ხშირად გამოერებად ელემენტს და გამეორების რაოდენობას
მაგალითად
arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
პროგრამამ უნდა დაგვიბრუნოს 'a - 5'
უმჯობესია გამოიყენოთ reduce მეთოდი

*/

arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function Raodenoba (arr){
    let result =arr.reduce((acc, El)=>{
        if(acc[El]){
           acc[El]++;
        } else {
            acc[El]=1;
        }
        return acc;

    },{})
    return result;
}
let seqObj =Raodenoba(arr1);
console.log(seqObj[arr1[0]])
let max = seqObj[arr1[0]];
 let maxObj=''
for( let el in seqObj){
 console.log(el)
 if(seqObj[el] >max){
  max =seqObj[el];
  maxObj=el;
 }
}
console.log(max);
console.log(maxObj)
/*
Task 2 : 
დაწერეთ ფუნქცია რომელიც იღებს რაღაც ციფრების მიმდევრობას (სტრინგად ან რიცხვად) პარამეტრად , ჩასვით ტირეები (-) ყოველ ორ ლუწ რიცხვს შორის. 
მაგალითად 025468 უნდა დაგვიბრუნდეს როგორც 0-254-6-8


*/
 let num=123;

function addSpace(val){
 let convertVal = ''+val;
 let result3='';
 for(let i=0; i<convertVal.length; i++){
    if(Number(convertVal[i])%2===0 && Number(convertVal[i+1])){
      result3+=convertVal[i]+ '-';
    } else result3 += convertVal[i]
 }
 console.log(result3)
}

addSpace(13467)

/*
Task 3 : 
დაწერეთ ფუნქცია რომელიც იღებს ორ მასივს და უნდა დაგვიბრუნოს 
ამ ორი მასივის დამერჯილი მასივი , გაერთიანებული , არადუბლირებული მნიშვნელობებით .
let array1 = [1, 2, 3];
let array2 = [2, 30, 1];

შედეგი უნდა იყოს : [1,2,3,30]

*/
let array1 = [1, 2, 3];
let array2 = [2, 30, 1];

let unionArr = array1.concat(array2);
console.log(unionArr)
let result4=[]
for(let i=0; i<unionArr.length; i++){
    if( result4.includes(unionArr[i])) continue;
    result4.push(unionArr)
}
console.log(result4)

/*
Task 4 : 
ფუნქციამ უნდა დააბრუნოს მასივი ისე როგორც კომენტარშია ნაჩვენები . 
გამოიყენეთ map

*/

function readyToPutInTheDOM(arr){
    return arr.map((el)=> {
                let domEl ='';
                domEl=`<h1> ${el.name}</h1> <h2>${el.age}</h2>`;
                return domEl;
            })
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 

    

  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]



  /* Task 5 */

  /* 
  გვაქვს ფუნქცია sumOfDifferences(arr) , რომელიც იღებს მასივს . 
  პროგრამამ მასივი უნდა დაალაგოს კლებადობით და შემდეგ უნდა დაგვითვალოს
  მეზობელი ელემენტების სხვაობების ჯამი . 
  მაგ : [2, 1, 10]  -->  9 , რაც ნიშნავს დავალაგებდით [10,2,1] კლებადად
  შემდეგ  (10-2) + (2-1) = 8 + 1 = 9

  სორტირების ფუნქცია დაწეროთ თქვენით ან გამოიყენოთ Array.sort() მეთოდი რომელიც
  პარამეტრად იღებს compareFn ფუნქციას , შედარების ქოლბექს .



  */
  
 let arr =[2, 1, 10]
    
  function sumOfDifferences(arr) {
    let sort = arr.sort((a,b)=>b-a);
    let sum =0;
  for (i=1; i<arr.length; i++)
  {
    sum+= sort[i-1] -sort[i]
  }
  return sum;
  }
  console.log(sumOfDifferences(arr))