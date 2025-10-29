
// const markMass = 78;
// const johnMass = 92;

// const markHeight = 1.69;
// const johnHeight = 1.95;

// const bmiMark =  markMass / markHeight ** 2 ;
// const bmiJohn = johnMass / (johnHeight * johnHeight);
// const markHigherBMI = bmiMark > bmiJohn
// console.log(bmiMark, bmiJohn, markHigherBMI);




// const inputYear = "1991";
// console.log(Number(inputYear) + 33);

// console.log ('I am ' + 23 + 'years');

// const tahun  = 1991;
// const tanggal = 12;

// console.log(Number(tahun) + 33);
// console.log(tahun + 18);

// false = 0 , '', NaN, null, undefined
// false boolean

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('sheo ghazy'));
// console.log(Boolean({}));
// console.log(Boolean(''));


// const sheo = 12;

// age = 18;

// if (age === 18) console.log('You just being an adult');

// check numberelse if (favorit === 7)

// const favorit = Number(prompt("masukan angka favorite anda ?"));

// if (favorit === 23){
//     console.log("nilai favorit 23 luar biasa");
// } {
//     console.log("7 nomor favorit ronaldo");
// } else if (favorit === 9){
//     console.log("9 nomor inzaghi");
// }else{
//     console.log("anda bukan pemain bola");
// }
 
// if (favorit === 9){
//     console.log("anda pemain bola sejati");
// }

/* Write your code below. Good luck! 🙂 */


// const scoreDolphins = (96+108+89)/3;

// const scoreKoalas = (88+91+110)/3;
// console.log(scoreDolphins,scoreKoalas)

// if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy")
// } else if (scoreKoalas > scoreDolphins){
//     console.log("Koalas win the trophy")
// } else if(scoreDolphins === scoreKoalas){
//     console.log("Both win the trophy")
// }


// const hari = 'tuesday';

// if (hari === 'monday'){
//     console.log("hari ini adalah senin")
// }else if (hari === 'tuesday'){
//     console.log("saya ganteng")
// } else {

// }

// switch(hari){
//     case 'monday':
//         console.log("hari adalah senin!")
    
// }

// const bill = 430;

/* Write your code below. Good luck! 🙂 */

// if ( bill >= 50 || bill <=300) {
//     const tip = bill * 0.2;
//     const total = bill + tip;
//     console.log(total); 
// }

// const tip = bill <=300 && bill >=50 ? bill * 0.15 : bill * 0.2;
// console.log(`the bill was ${bill}, and the tip was ${tip},and total value was ${bill + tip}.`)

// function jusBuah (apel, semangka){
//     console.log(apel, semangka)
//     const juice = `anda memiliki ${apel} apel dan ${semangka} semangka!`;
//         return juice;
// }

// // jusBuah(5,0);
// console.log(jusBuah(5,0));
// console.log(jusBuah(5,0));

// functin deklarasi

// function hitungUmur (ulangTahun){
//     return 2045 -  ulangTahun;
// }

// const umur1 = hitungUmur(1991);

// // function expression
// const ultah2 =  function (ulangTahun){
//     return 2045 -  ulangTahun; 
// }

// const umur2 =  ultah2(1991)

// console.log(umur1, umur2);

// arrow function

// const cekTahunPensiun =  (ulangTahun,firstName) => {
//     const umur = 2024 - ulangTahun;
//     const pensiun =  65 - umur;
//     return `Hallo ${firstName} anda akan pensiun ${pensiun} tahun lagi🥰`;
// }

// console.log(cekTahunPensiun(1991,'Sheo'));


// function mesinPotongBuah (buah){
//     return buah * 4 ;
// }

// function mesinBuah (apel, jeruk) {
//     const potongApel = mesinPotongBuah(apel);
//     const potongJeruk = mesinPotongBuah(jeruk);


//     const jus = `buah anda ${potongApel} apal & ${potongJeruk} jeruk!`;
//     return jus;
    
// }

// console.log(mesinBuah(2,3));

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.




const calcAverage = (a, b, c) => ( a + b + c)/3
console.log(calcAverage(3, 4, 5));

const scoreDolphins =  calcAverage(44, 23, 71);
const scoreKoalas =  calcAverage(65, 54, 49);

console.log(scoreDolphins,scoreKoalas);

















// const calcAverage = (a, b, c) => (a + b + c)/3;
// console.log(calcAverage(3,4,5))


// let  scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins,scoreKoalas)

// // console.log(scoreDolphins,scoreKoalass);

// const checkWinner =  function (avgDolphins, avgKoalas){

//     if(avgDolphins >= 2 * avgKoalas){
//         console.log(`Dolpin menang skor ${avgDolphins} & ${avgKoalas}`)
//     }else if (avgKoalas >= 2 * avgDolphins){
//         console.log(`Koalasa menang  skor ${avgKoalas} & ${avgDolphins}`)
//     }else {
//         console.log(`hasil imbang`);
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(4,40);


// scoreDolphins = calcAverage(2, 2, 2s);
// scoreKoalas =  calcAverage (23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);
