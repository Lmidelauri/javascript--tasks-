/*
    Task 1 :
    ანა არის 28 წლის , ხოლო მისი ძმა ლევანი 21ის .
    გამოიყენეთ ცვლადები , რომელშიც შეინახავთ თითოეულის ასაკს და სახელს.
    განსაზღვრეთ ახალი სტრინგ ტიპის ცვლადი რომელიც შეინახასვს ტექსტს :
    'ანა ლევანზე 7 წლით უფროსია'
    სხვაობა დათვალეთ დინამიურად ცვლადების და არითმეტიკული ოპერატორების გამოყენებით
    დალოგეთ ზემოაღნიშნული ცვლადი .
*/
let sister = 'Ana';
let brother = 'levani';
let sisterAge = 28;
let brotherAge = 21;
let difference = sisterAge - brotherAge;
let text = `${brother} ${sister}-ზე ${difference} წლით უფროსია `;
console.log(text);
/*
   Task 2 :
       გვაქვს სტუდენტების სახელების მასივი ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
       დალოგეთ სიის ზუსტად შუაში მყოფი სახელი.  */

let students = ['John', 'Sam', 'Ann', 'Will', 'Andrew', 'Joseph', 'Lorelai', 'Amelie', 'Den'];
let i = 0;
if (students.length % 2 == 0) {
    let std = (students.length - students.length / 2);
    let std2 = (students.length - students.length / 2) - 1;
    console.log(students[std]);
    console.log(students[std2]);
}
else {
    let std3 = ((students.length - 1) / 2);
    console.log(students[std3]);
}
/*  Task 3 :
  Part 1 : შექმენით სტუდენტის ობიექტი , რომელსაც აქვს 5 property : firstName; lastName; age; subjects; roommate;
  firstname,lastname - string type
  age - number
  subject - object (array of strings)
  roommate - object (რომელსაც აქვს თავის მხრივ ორი property : fullname , age )
  მნიშვნელობები მიანიჭეთ ტიპების მიხედვით . subject- მასივი უნდა შედგებოდეს არანაკლებ 5 ელემენტისგან */
let roommy = {};
roommy.fullname = 'Salome Ghaghanidze';
roommy.roommyAge = 23;
let subject = ['math', 'history', 'geography', 'music', 'art'];
let studentinfo = {
    firstName: 'LIKA',
    lastName: 'Midelauri',
    studentAge: '24',
    subjects: subject,
    roommate: roommy
};
console.log(studentinfo);
/* Part 2 :
     for ციკლის გამოყენებით დალოგეთ თუ რა საგნებს სწავლობს სტუდენტი , subject arrayს ელემენტები.
     ასევე შექმენით ახალი ცვლადი fullName რომელშიც შეინახავთ სტუდენტის სრულ სახელ და გვარს.
     ეს fullName მნიშვნელობასთან ერთად დაამატეთ სტუდენტის ობიექტს.
     დაამატეთ ცვლადი result რომლის მნიშვნელობაც იქნება წინადადება :
         ' (სტუდენტის სახელი და გვარი) არის age წლის და მისი რუმმეითი არის : roommate fullname

         for(let el of studentinfo.subjects)
          console.log
*/

for (let x = 0; x < subject.length; x++) {
    console.log(subject[x])
};
studentinfo.studentfullname = studentinfo.firstName + ' ' + studentinfo.lastName;
let result = ` ${studentinfo.studentfullname} არის ${studentinfo.studentAge} წლის და მისი რუმმეითი არის ${roommy.fullname} `;
console.log(result);
/*
   Task 4 :
       გვაქვს  მასივი : ["Banana", "Orange", "Apple", "Mango",2,12]
       გამოიყენეთ while ციკლი და მანამ სანამ მასივის ელემენტის ტიპი არის სტრინგი
       დალოგეთ ეს ელემენტი.
*/

const fruits = ["Banana", "Orange", "Apple", "Mango", 2, 12];

let y = 0;
while (typeof (fruits[y]) == 'string') {

    console.log(fruits[y]);
    y++;

};

/*
  Task 5 :
  გვაქვს მასივი : [12,23,43,11,9,2,121,90]
  თუ მასივის ელემენტი მეტია 31ზე და თან არის ლუწი მაშინ დალოგეთ : 'Element is greater than provided value and is EVEN'
  თუ მასივის ელემენტი ნაკლებია 31ზე და თან არის კენტი მაშინ დალოგეთ : 'Element is less than provided value and is ODD'
*/
const nums = [12, 23, 43, 11, 9, 2, 121, 90];

for (z = 0; z < nums.length; z++) {
    let elements = nums[z];
    if (elements > 31 && elements % 2 == 0) {
        console.log('Element is greater than provided value and is EVEN');
    }
    else if (elements < 31 && elements % 2 == 0) {
        console.log('Element is less than provided value and is Even')
    }
    else if (elements < 31 && elements % 2 != 0) {
        console.log('Element is less than provided value and is odd')
    }
    else {
        console.log('Element is greater than provided value and is ODD');
    }
}
