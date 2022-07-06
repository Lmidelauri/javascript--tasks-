//task 1
/*  
    დაწერეთ ფუნქცია რომელიც მიიღებს ორ რიცხვს და აღნიშნული ფუნქცია
    დააბრუნებს ამ ორი რიცხვის უდიდეს საერთო გამყოფს . 
    იგივე ფუნქცია დაწერეთ რეკურსიული ფუნცქიის გამოყენებით იპოვეთ უდიდესი საერთო გამყოფი 
    gcd(a,b)
    
*/

function  gcd(a,b) {
    let arga=[];
    let argb=[];
    let divider= new Array;
    for( i=0; i<=a; i++ ){
        if( a%i==0){ arga.push(i)}
    }
    for ( i=0; i<=b; i++ ){
        if(b%i ==0){ argb.push(i)}
    }
   
    console.log(argb);
    console.log(arga);
    
   for (let i=0; i<arga.length; i++){
         for (let k = 0 ; k < argb.length ;  k ++ ){ 
  
          if (arga[i]==argb[k]) {
             
               divider.push(arga[i]) ; 
  
          }
            
  
        }
     
 
   }

   console.log( Math.max(...divider)); 
}
  
// console.log(  divider); 
// gcd(20,30); 

gcd(10, 15); 


function gcdiv(a,b){
    if(b==0){
        return a;
    }
    return gcdiv(b, Math.round(a%b))
}
 console.log(gcdiv(10,35))

//Task 2 
/*
დაწერეთ ფუნქცია ციფრების ჯამი , sumOfDigits(n) რომელიც იღებს ერთ პარამეტრს 
და აბრუნებს გადაცემული მნიშვნელობის შემადგენელი ციფრების ჯამს . 
sumOfDigits(1312) = 1+3+1+2 = 7;

აღნიშნული დავალება შეასრულეთ ორნაირად , როგორც ჩვეულებრივი ასევე რეკურსიული
ფუნქციის გამოყენებით . 

*/
 function sumOfDigits (n){
    if (n<10){
        return n;
    }
    return Math.round(n%10)+ sumOfDigits(Math.floor(n/10))
 }
 sumOfDigits(134);

//Task 3
/*
    გვაქვს factory ობიექტი , რომელსაც აქვს რამდენიმე key-value წყვილი , 
    ასევე მეთოდი calculateWorkload - აბრუნებს მხოლოდ თანამშრომლის შესრულებული სამუშაოების მასივს (მაგალითის მიხედვით [40,25,28,30,31])
    და formatArray - რომელსაც გადაეცემა თანამშრომლის სახელი და აბრუნებს  ობიექტს თანამშრომლის სახელი  და ხელშეკრულების ამოწურვამდე
    დარჩენილი დროის მნშვნელობებით. ხელშეკრულების პერიოდი ყველა თანამშრომლისთვის არის 5 წელი. 
    მაგალითად ('John' ის შემთხვევაში დაგვიბრუნდება {name : "John", timeLeft : 4}) timeleft = 5 - timespent;
    გვაქვს 
    დალოგეთ calculateWorkload და formatArray შედეგები; 
    !!!აუცილებლად გამოიყენეთ bind მეთოდი
*/

let factory = {
    facName : 'Volkswagen Wolfsburg Plant',

    calculateWorkload : function (){

        let workloadArr = new Array ;
  
        
          for (i= 0; i< this.employeeWeeklyWorkload.length ; i++ )
            {
                
                workloadArr.push(this.employeeWeeklyWorkload[i].workload);
  
            }
            return workloadArr; 
    },

    formatArray : function (newName) {



        let nameAndTimeLeft = new Object ; 
        for (i = 0 ; i < this.employees.length ; i ++)
        {
   
          if (this.employees[i].name == newName)
       {
   
         nameAndTimeLeft.name =newName ;
         nameAndTimeLeft.timeLeft = 5 - ( this.employees[i].timeSpent) ;
   
       }
   
   
        }
          return nameAndTimeLeft ;
       }   
    }
    


let factoryEmployees = {
    employees : [{name : "John", timeSpent : 1 } , {name : "Sam", timeSpent : 3 },{name : "Maria", timeSpent : 2 },{name : "Dan", timeSpent : 4 },{name : "Lorelai", timeSpent : 5 }],
    // employeeNum : this.employees.length,
}

let workloadData = {
    employeeWeeklyWorkload : [{name : "John", workload : 40 } , {name : "Sam", workload : 25 },{name : "Maria", workload : 28 },{name : "Dan", workload : 30 },{name : "Lorelai", workload : 31 }]
}

let calcWL = factory.calculateWorkload.bind(workloadData);
console.log(calcWL());   


let FrArr = factory.formatArray.bind(factoryEmployees , "Maria");
console.log(FrArr());  




//Task 4

/*
დაწერეთ ფუნქცია sumOfNumbers , რომელიც დააბრუნებს გადაცემული არგუმენტების ჯამს
აღნიშნული ფუნქცია გაუშვით applyს საშუალებით, შესაბამისად არგუმენტებიც applyს მეშვეობით უნდა გადაცეთ.

hint :  თუ კი ფუნქციაში არ გვაქვს this ქივორდის საჭიროება და შესაბამისად ობიექტი რომელსაც
thisმა უნდა მიუთითოს შეგიძლიათ apply call-ს პირველი არგუმენტად გადასცეთ null 


*/

  
function sumOfmyNumbers (...numArr) 
{

  let  result = 0 ;
  for (let i=0 ; i< numArr.length; i ++) 
  {
    result +=  numArr[i] ; 
  } 
 
  return result ; 
}
 
let result =  sumOfmyNumbers(null,...[10,30,20,20,2,9,20]) 
console.log(result) ; 

//Task 5
/*
დაწერეთ რეკურსიული ფუნქცია checkIfEven(n) . აბრუნებს გადაცემული მნიშვნელობა
არის თუ არა ლუწი . აუცილებლად გამოიყენეთ რეკურსია

*/


    // function checkIfeven(num) {

    //     if (num === 0) {
    //         return true;
    //     } else if (num === 1) {
    //         return false;
    //     } else {

    //         let secondNum = num - 2;
    //         if (checkIfeven(secondNum)) {
    //             return true;

    //         } else {
    //             return false;
    //         }
    //     }
    // }
    // console.log(checkIfeven(8));
    // console.log(checkIfeven(10));


    function checkIfEven(num) 
    {   
       if (num == 1 )  return 'Odd' ; 
       if (num == 0 )  return 'Even' ;
      
       
       return  checkIfEven(num-2) ; 
    
    }
    
    
    let e = checkIfEven(20);
    console.log(e) ; 

