/*
წარმოიდგინე რომ არ არსებობს String კონსტრუქტორი , 

მასივის დახმარებით შექმენით MyString კლასი , რომელსაც ექნება ტექსტის ზომის
დაბრუნების ფუნქციონალი , ექნება concat მეთოდი რომელსაც გადაეცემა ტექსტი და აბრუნებს
გადაცემული ტექსტის და საწყისი სტრინგის გაერთიანების ახალ სტრინგს . 

ასევე ექნება მეთოდი elementAt(index) რომელიც გადაცემული ინდექსით დააბრუნებს შესაბამის ქარაქტერს 

და ექნება მეთოდი subText(startingIndex) რომელიც დააბრუნებს საბსტრინგს გადაცემული ინდექსიდან ბოლომდე



*/

class MyString {

    constructor(value) {
        this.value = value;
        let count = 0;
        let length = 0;
        let forLengh = [];
        let forConcat = [];
        let concatCount = 0;
        let forSubstring = [];
        // Length 
        this.calcLength = function () {
            while (true) {
                if (value[count] == undefined) return length;
                forLengh.push(value[count]);
                count++;
                length++;
                // console.log(forLengh);
            }

        }
        // concat 
        this.concatFunction = function (concText) {
            this.concText = concText;
            this.calcLength();
            forConcat = forLengh;
            while (true) {
                if (concText[concatCount] == undefined) return forConcat.join('');
                forConcat.push(concText[concatCount]);
                concatCount++;
            }
        }

        //elementAt

        this.elementAt = function (index) {
            this.index = index;
            this.calcLength();
            return forLengh[index];

        }

        //subText

        this.subText = function (startingIndex) {

            this.startingIndex = startingIndex;
            this.calcLength();
            while (true) {
                if (forLengh[startingIndex] == undefined) return forSubstring.join('');

                forSubstring.push(forLengh[startingIndex]);
                startingIndex++;
            }

        }




    }

};


let testValue = new MyString('მე ვარ ქართველი,');
let firstMethod = testValue.calcLength();
let secondMethod = testValue.concatFunction(' და მაშასადამე, ვარ ევროპელი ')
let thirdMethod = testValue.elementAt(6);
let fourthMethod = testValue.subText(14)
console.log('length : ' + firstMethod);
console.log('concat :' + secondMethod);
console.log('index :' + thirdMethod);
console.log('SubTxt:' + fourthMethod); 