//Task 1
/*
    შექმენით ფუნქცია რომელსაც აქვს ერთი პარამეტრი . 
    ფუნქციას გადაეცით ობიექტი არგუმეტნად 
    
    let sampleObject = {
        isItarable : false,
        sampleArray : [12,63,21,34,98,57]
    }
    თუ მიღებული არგუმენტის isItarable მნიშვნელობა არის ჭეშმარიტი მაშინ დალოგეთ თითოეული ელემენტი
    თუ არ არის ჭეშმარიტი გამოიტანეთ წინადადება "provided array isn't itarable"

*/
 

let sampleObject = {
    isItarable : false,
    sampleArray : [12,63,21,34,98,57]
};

function myfunction(sampleArray){
    if( sampleObject.isItarable== true){
        for(let i=0; i<sampleArray.length; i++){
        console.log(sampleArray[i])
    }
    }
    else(
        console.log( "provided array isn't itarable")
    )
};
myfunction();

//Task 2
/*
    შექმენით ფუნქცია checkPythagoras რომელიც მიიღებს სამ პარამეტრს x,y,z .
    ფუნქციამ უნდა შეამოწმოს თუ აღნიშნული რიცხვების რომელიმე კომბინაცია მაინც
    აკმაყოფილებს პითაგორას თეორემის პირობას a^2 + b^2 = c^2;
    თუ კი ეს პირობა დაკმაყოფილდა ფუნქციამ უნდა დააბრუნოს true 
    წინააღმდეგ შემთხვევაში false
    
*/
 
function checkPythagoras(x,y,z){

switch(true){
    case( x**2+ y**2 == z**2):
    return true;
    case( x**2+ z**2 == y**2):
    return true;
    case( z**2+ y**2 == x**2):
    return true;
    default:
        return false
    }

};
let result= checkPythagoras(4,3,5);
console.log(result);


//Task 3
/*
    დაწერეთ ფუნქცია minMax რომელიც იღებს 1 მასივის ტიპის პარამეტრს 
    და დააბრუნებს მასივის ელემენტებს შორის მაქსიმალურს და მინიმალურს ელემენტს .
    მაგ : [2,14,25,75,11,6] თუ კი ამ მასივს გადავცემთ არგუმენტის სახით ფუნქციამ უნდა
    დააბრუნოს "Min value is 2 and Max value is 75"
*/
let ricxvebi=[ 1,20,40,60,30,150];
function minMax(ricxvebi){
 let max =ricxvebi[0];
 let min= ricxvebi[0];

 for (r=0; r<ricxvebi.length; r++){
    if (ricxvebi[r]>max){
        max=ricxvebi[r];
    }
   
 };
 for (r=0; r<ricxvebi.length; r++){
    if (ricxvebi[r]< min){
        min=ricxvebi[r];
    }
};

 return `"Min value is ${min} and Max value is ${max}` ;
};
let resultMinMax=minMax(ricxvebi);

console.log(resultMinMax);
//Task 4

/*
დაწერეთ ფუნქცია რომელმაც გადაცემული კუთხის მნიშვნელობით უნდა დააბრუნოს
თუ რა ტიპის კუთხეა . 
კუთხის სახეები:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.

*/
function typeOfAngle(kutxe){

    switch(true){
        case( kutxe>=0 && kutxe<90):
       console.log("An angle between 0 and 90 degrees.");
       break;

       case(kutxe==90):
       console.log("An 90 degree angle.");
       break;

       case(kutxe>90 && kutxe<180):
       console.log("An angle between 90 and 180 degrees.");
       break;

       case(kutxe==180):
       console.log(" A 180 degree angle.")
       break;
       default:
        console.log("unknown type of angle");
        break;
    };

    

    
}
typeOfAngle(110);
//Task 5
/*
    დაწერეთ ფუნქცია checkStudentGrade რომელიც მიიღებს ობიექტების მასივს. 
    მაგალითად [{name: student1; grade : 91}, {name: student2; grade : 71}, {name: student3; grade : 45} ]
    ფუნქციამ სტუდენტის ქულის მიხედვით უნდა განსაზღვროს საფინალო შედეგი finalResult 
    ქვემოთ არსებული ცხრილის მიხედვით და ელემენტის ობიექტში დაამატოს propertyს სახით
    მიღებული მასივი დააბრუნებინეთ ფუნქციას .

    0-50 = F
    51-60 = E
    61-70 = D
    71-80 = C
    81-100 = A

    საორიენტაციოდ შედეგი აღნიშNული მაგალითის მიხედვით უნდა იყოს
    [{name: student1; grade : 91 ; finalResult : 'A'}, {name: student2; grade : 71,finalResult : 'C'}, {name: student3; grade : 45, finalResult : 'F'} ]


*/
let studentsInfo=[{name: 'lika', grade : 91}, {name: 'salchi', grade : 71}, {name: 'student3', grade : 45} ]
function checkStudentGrade(studentsInfo){
    for( s=0; s<studentsInfo.length; s++){
        switch(true){

            case(  studentsInfo[s].grade >= 0  && studentsInfo[s].grade <= 50 ) :
            studentsInfo[s].finalResult='F' ;
            break ;
            case(  studentsInfo[s].grade >= 51  && studentsInfo[s].grade <= 60 ) :
            studentsInfo[s].finalResult='E' ;
            break ;
            case(  studentsInfo[s].grade >= 61  && studentsInfo[s].grade <= 70 ) :
            studentsInfo[s].finalResult='D' ;
            break ;
            case(  studentsInfo[s].grade >= 71  && studentsInfo[s].grade <= 80 ) :
            studentsInfo[s].finalResult='C' ;
            break ;
            case(  studentsInfo[s].grade >= 81  && studentsInfo[s].grade <= 90 ) :
            studentsInfo[s].finalResult='B' ;
            break ;
            case(  studentsInfo[s].grade >= 91  && studentsInfo[s].grade <= 100 ) :
            studentsInfo[s].finalResult='A' ;
            break ;
        }
    }

    for (s=0; s<studentsInfo.length ; s++)
    {     
   console.log(studentsInfo[s]) ; 
    }
}
checkStudentGrade(studentsInfo);
