

//     🔹 დავალება 1
// შექმენით მასივი [1, 2, 3, 4, 5] და გამოიყენეთ for ციკლი ყველა ელემენტის
// გამოსატანად.


// let numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     alert(numbers[i])
// }



// 🔹 დავალება 2
// შექმენით მასივი ['🍎', '🍌', '🍇'] და გამოიყენეთ for...of, რომ ყველა ელემენტი
// document.write-ით გამოიტანოთ.


// let fruits = ['🍎', '🍌', '🍇'];

// for (let fruit of fruits) {
//     document.write(fruit + "<br>");
// }



// 🔹 დავალება 3
// შექმენით მასივი სახელებით ['ანა', 'ბექა', 'მარიამი'] და while ციკლით დაბეჭდეთ
// ყველა სახელი კონსოლში.


// let saxelebi = ['ანა', 'ბექა', 'მარიამი'];

// let i = 0;

// while (i < saxelebi.length) {
//     console.log(saxelebi[i]);
//     i++;
// }



// 🔹 დავალება 4
// გამოიყენეთ do...while, რომ დაბეჭდოთ რიცხვები 1-იდან 10-მდე.


// let i = 1;

// do {
//     console.log(i);
//     alert(i);
//     document.write(i + "<br>")
//     i++;

// } while (i <= 10);


// alert((i))


// 🔹 დავალება 5
// მოცემულია მასივი [2, 4, 6, 8, 10]. for ციკლით თითოეული რიცხვი გაამრავლეთ 2-ზე
// და გამოიტანეთ.


// let numbers = [2, 4, 6, 8, 10];

// for (let i = 0; i < numbers.length; i++) {
//     let result = numbers[i] * 2;
//     console.log(result);
//     document.write(result + "<br>")
// }







// 🔹 დავალება 6
// დაწერეთ კოდი, რომელიც მასივიდან მხოლოდ ლუწ რიცხვებს დაბეჭდავს: [1, 2, 3, 4, 
// 5, 6, 7, 8]

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {  
//         console.log(arr[i]);
//         document.write(arr[i]+"<br>")
//     }
// }

// 🔹 დავალება 7
// მოცემულია მასივი ['🟢', '🔴', '🟢', '🔵']. for...of-ით თითოეული ელემენტი განათავსეთ
// <div>-ში სხვადასხვა ფონის ფერით.

// ვერ გავაკეთე!!!





// 🔹 დავალება 8
// მოცემულია მასივი [5, 10, 15, 20]. დაბეჭდეთ მათი ჯამი.

// let arr = [5, 10, 15, 20];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// console.log(sum)
// document.write(sum)


// 🔹 დავალება 9
// მოცემულია მასივი ['a', 'b', 'c', 'd', 'e']. მასივის სიგრძის გამოყენებით for ციკლით
// ბოლოდან დასაწყისისკენ დაბეჭდეთ ელემენტები.

// let arr = ['a', 'b', 'c', 'd', 'e'];

// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//     document.write(arr[i]+"<br>")
// }






// 🔹 დავალება 10
// შექმენით ცარიელი მასივი. for ციკლით მასში ჩაწერეთ რიცხვები 1-იდან 5-მდე.

// let arr = []; 

// for (let i = 1; i <= 5; i++) {
//     arr.push(i);}

// console.log(arr);
// document.write(arr);





// 🔹 დავალება 11
// შექმენით ფუნქცია, რომელიც მასივის ყველა ელემენტის საშუალო არითმეტიკულს
// აბრუნებს.

// function average(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }


// let numbers = [10, 20, 30, 40, 50];
// let avg = average(numbers);
// console.log(avg); 
// document.write(avg)





// 🔹 დავალება 12
// მოცემულია let fruits = [['ვაშლი', 'მსხალი'], ['ბანანი', 'ანანასი']]. გამოიყენეთ
// ორ დონიანი for ციკლი, რომ თითოეული ხილი დაბეჭდოთ.

// let fruits = [['ვაშლი', 'მსხალი'], ['ბანანი', 'ანანასი']];

// for (let i = 0; i < fruits.length; i++) {
//     for (let j = 0; j < fruits[i].length; j++) {
//         console.log(fruits[i][j]);
//         document.write(fruits[i][j]+"<br>")
//     }
// }





// 🔹 დავალება 13
// შექმენით ჩანასმული მასივი და დაბეჭდეთ ყველა შიდა მასივის ელემენტების ჯამი
// ცალ-ცალკე.
// js
// CopyEdit
// let numbers = [
//  [1, 2, 3],
//  [4, 5],
//  [6, 7, 8, 9]
// ];




// 🔹 დავალება 14
// დაწერეთ ფუნქცია, რომელიც იღებს 2D მასივს და აბრუნებს ყველა რიცხვის ჯამს.


// function jami(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             sum += arr[i][j];
//         }
//     }
//     return sum;
// }


// let numbers = [
//     [10, 20, 30],
//     [40, 50, 60]
// ];

// console.log(jami(numbers));
// document.write(jami(numbers))



// 🔹 დავალება 15
// შექმენით ფუნქცია, რომელიც იღებს მასივს და აბრუნებს მასში ყველაზე დიდ
// რიცხვს.


// let xelfasebi=[20000, 30000, 50000]


// function kvelazeDidiXelfasi(arr) {
//     return Math.max(...arr);
// }

// console.log(kvelazeDidiXelfasi(xelfasebi));

// document.write(kvelazeDidiXelfasi(xelfasebi));




// 🔹 დავალება 16
// შექმენით ფუნქცია, რომელიც იღებს მასივს და აბრუნებს ახალ მასივს, სადაც
// თითოეული ელემენტი ორჯერ გაზრდილია.

// let xelfasebi=[600, 1000, 1200];
// let result=[]
// function gaormageba(arr){ for (let i=0; i<arr.length;i++) 
//     { result.push(arr[i] * 2)}

// return result;
// }

// let gaormagebulikhelpasi = gaormageba(xelfasebi);
// alert(gaormagebulikhelpasi);
// console.log(gaormagebulikhelpasi);






// 🔹 დავალება 17
// შექმენით ჩანასმული მასივი, რომელშიც შიდა მასივები სხვადასხვა სტუდენტის
// ქულებია. გამოთვალეთ თითოეული სტუდენტის საშუალო.


// let studentebiqulebi=[[ "mirian", 4,5,6],

// [ "mirian", 40,50,60],
// [ "irina", 400,500,600],
// [ "alexandre", 40000,50000,60000],
// [ "mano", 400000,500000,600000],
// [ "dato", 4000000,5000000,60000]
// ]



// for (let i = 0; i < studentebiqulebi.length; i++) {
//     let student = studentebiqulebi[i];
//     let average = (student[1] + student[2] + student[3]) / 3; 
//     console.log(student[0] + " -საშუალო ქულა: " + average);
//     alert(student[0] + " -საშუალო ქულა: " + average);
// }






// 🔹 დავალება 18
// შექმენით მასივი სიტყვებით და დაბეჭდეთ მხოლოდ ის სიტყვები, რომელთა სიგრძე
// 4-ზე მეტია.

// let mychildren = ["Mirian", "Irina", "Nutsa", "Alexandre", "Mano", "Dat0"];
// let result = [];

// for (let i = 0; i < mychildren.length; i++) {
//     if (mychildren[i].length > 4) {
//         result.push(mychildren[i]);
//     }
// }

// console.log(result);

// alert(result);


// 🔹 დავალება 19
// შექმენით ფუნქცია, რომელიც 2D მასივიდან მხოლოდ ლუწ რიცხვებს აბრუნებს
// ცალკე მასივად.

// function getEvenNumbers(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {

//             if (arr[i][j] % 2 === 0) {
//                 result.push(arr[i][j]);
//             }

//         }
//     }

//     return result;
// }

// let data = [
//     [10, 5, 95],
//     [27, 25, 8]
// ];

// console.log(getEvenNumbers(data));
// alert(getEvenNumbers(data));


//  დავალება 20
// დაწერეთ ფუნქცია, რომელიც მასივიდან ელემენტებს მხოლოდ იმ შემთხვევაში
// აჩვენებს, თუ ისინი string ტიპისაა


// function showStrings(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "string") {
//             console.log(arr[i]);
//             alert(arr[i])
//         }
//     }
// }

// let data = [10, "please", 95, "buy me ", 25, "JS ice-creams"];
// showStrings(data);