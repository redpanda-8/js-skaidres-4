// JS-4 - 16 skaidre -----------------------------------------------------------------------------------------------------------------------
// 1 ----------------------------------------------------------------------------------------------------------------------------------------
// 1. Parasykite funkcija, kuri priima masyva ir prideda i ji nauja elementa. Funkcija turi grazinti atnaujinta masyva. 
// Rezultata atspausdinti konsoleje.

function pridadaElementaIMasyva(array){
  const elemt = {test: 'test'};
  // prideda nauja elementa
  array.push(elemt);
  // grazina nauja masyva
  return array;
};
// tuscias masyvas
const emptyArray = [];
// iskvieciam funkcija (nauja masyva grazina tiek return array)
console.log(pridadaElementaIMasyva(emptyArray));

// 2 ---------------------------------------------------------------------------------------------------------------------------------------
// 2. Parasykite funkcija, kuri susumuoja visus skaicius masyve naudodama reduce metoda. Grazinkite suma. Rezultata atspausdinti konsoleje.
function susumuotiSkaiciai(){
  const array = [1,2,3,4,5];
  // accumulator - dabartine suma, currentValue - dabartine verte (i ta cele i kuria dbr ziuri)
  const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
  return sum;
}

console.log(susumuotiSkaiciai());

// 3 ---------------------------------------------------------------------------------------------------------------------------------------
// 3. Parasykite funkcija, kuri priima masyva su skaiciais ir rusiuoja ji nuo maziausio iki didziausio, naudojant sort metoda. 
// Rezultata atspausdinti konsoleje.

function sortAccending(){
  const array = [40, 100, 1, 5, 25, 10];
  return array.sort(function(a, b){return a-b});  
}

console.log(sortAccending());


// 4 ---------------------------------------------------------------------------------------------------------------------------------------
// 4. Parasykite funkcija, kuri priima masyva ir grazina nauja masyva, kuris apima elementus nuo tam tikros pradzios iki pabaigos indekso 
// (neitraukiant pabaigos). Naudokite slice metoda. Rezultata atspausdinti konsoleje.
// 

// 5 ---------------------------------------------------------------------------------------------------------------------------------------
// 5. Parasykite funkcija, kuri sujungia du masyvus i viena naudojant concat metoda. Rezultata atspausdinti konsoleje.
// 

// 6 ---------------------------------------------------------------------------------------------------------------------------------------
// 6. Parasykite funkcija, kuri priima masyva su skaiciais ir grazina tik tuos skaicius, kurie yra didesni uz 10, naudojant filter metoda. 
// Rezultata atspausdinti konsoleje.
// 

// 7 ---------------------------------------------------------------------------------------------------------------------------------------
// 7. Parasykite funkcija, kuri priima masyva ir grazina pirmaji elementa, kuris yra didesnis uz 10, naudojant find metoda. 
// Rezultata atspausdinti konsoleje.
// 

// 8 ---------------------------------------------------------------------------------------------------------------------------------------
// 8. Parasykite funkcija, kuri priima masyva ir grazina nauja masyva, kuriame visi elementai yra padauginti is 2, naudojant map metoda. 
// Rezultata atspausdinti konsoleje.
// 

// JS-4 - 62 skaidre ---------------------------------------------------------------------------------------------------------------------------
// 1 ------------------------------------------------------------------------------------------------------------------------------------------
// 1. Sugeneruokite masyva is 30 elementu (indeksai nuo 0 iki 29), kuriu reiksmes yra atsitiktiniai skaiciai nuo 5 iki 25;

// susikuriau funkcija kad uzpildytu patiekta array reiksmemis, kurios yra reneruojamos random tarp 5 ir 25,
// Math.floor padaro, kad nebutu skaiciu po kableriu random reiksmese
// Math.random sugeneruoja atsitiktini skaiciu * 20 nurodo kad tas skaicius yra tarp 0 ir 20. Tada +5 padaro tarp 5 ir 25.
let arrayOfRandomNumbers = [];

function uzpildomeArray(arr){   
    // for loop'e mes nustatome kiek kartu norime kartoti veiksma. Tai skaiciuojame pagal i kuris yra aktyvus tik for viduje
    // var i = 0; - nusako musu startini indeksa, siuo metu nuli, nuo sios reiksmes pradesime skaiciuoti loop'us
    // i <= 29; - yra salyga kuriai griztant true mes kartosime loop'a. Tai kol i bus maziau 29
    // i++ - jei pries tai buvusi salyga grazina true, padidiname i ir kartojame loop'a dar karta
    // visos sitos trys salygos yra privalomos for loop'ui (kitaip uzsiloopinsi ir dings kompas)
    for(var i = 0; i <= 29; i++){
        const randomReiksme = Math.floor(Math.random() * 20 + 5);
        arr.push(randomReiksme);
      }
    
    return arr
}

uzpildomeArray(arrayOfRandomNumbers);

console.log(arrayOfRandomNumbers);

// 2.1 ---------------------------------------------------------------------------------------------------------------------------------------
// 2.1 Naudodamiesi 1 uzdavinio masyvu:   Suskaiciuokite kiek masyve yra reiksmiu didesniu uz 10;
// 
const greaterThanTen = arrayOfRandomNumbers.filter(num => num > 10);

console.log('Array reiksmesddesnes uz 10: ', greaterThanTen.length);

function findMaxValueAndIndex(arr) {
    let maxValue = arr[0];  
    let maxIndex = 0; 
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxValue) {
        maxValue = arr[i];
        maxIndex = i;
      }
    }
  
    return [maxValue, maxIndex];
  }

  const [maxValue, maxIndex] = findMaxValueAndIndex(arrayOfRandomNumbers);
  console.log(`Maximum value: ${maxValue}, Index: ${maxIndex}`);

// 2.2 ---------------------------------------------------------------------------------------------------------------------------------------
// 2.2 Raskite didziausia masyvo reiksme ir jos indeksa arba indeksus jeigu yra keli;
// 

// 2.3 ---------------------------------------------------------------------------------------------------------------------------------------
// 2.3 Suskaiciuokite visu poriniu (lyginiu) indeksu reiksmiu suma;
// 

// 2.4 ---------------------------------------------------------------------------------------------------------------------------------------
// 2.4 Sukurkite nauja masyva, kurio reiksmes yra 1 uzdavinio masyvo reiksmes minus tos reiksmes indeksas;
// 

// 2.5 ---------------------------------------------------------------------------------------------------------------------------------------
// 2.5. Papildykite masyva papildomais 10 elementu su reiksmemis nuo 5 iki 25, kad bendras masyvas padidetu iki indekso 39;
// 

// 2.6 ---------------------------------------------------------------------------------------------------------------------------------------
// 2.6. Is masyvo elementu sukurkite du naujus masyvus. Vienas turi buti sudarytas is neporiniu indekso reiksmiu, o kitas is poriniu;
// 

// 2.7 ---------------------------------------------------------------------------------------------------------------------------------------
// 2.7. Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni uz 15;
// 

// 2.8 ---------------------------------------------------------------------------------------------------------------------------------------
// 2.8. Suraskite pirma (maziausia) indeksa, kurio elemento reiksme didesne uz 10;
// 

// JS-4 - 63 skaidre -----------------------------------------------------------------------------------------------------------------------
// 1 ----------------------------------------------------------------------------------------------------------------------------------------
// 1. Sugeneruokite masyva, kurio reiksmes atsitiktines raides A, B, C, D, o ilgis 200. Suskaiciuokite kiek yra kiekvienos raides.
// 

// 2 ---------------------------------------------------------------------------------------------------------------------------------------
// 2. Isrusiuokite 1 uzdavinio masyva pagal abecele.
// 

// 3 ---------------------------------------------------------------------------------------------------------------------------------------
// 3. Sugeneruokite du masyvus, kuriu reiksmes yra atsitiktiniai skaiciai nuo 100 iki 999. Masyvu ilgiai 100. Masyvu reiksmes turi buti 
// unikalios savo masyve (t.y. neturi kartotis).
//

// 4 ---------------------------------------------------------------------------------------------------------------------------------------
// 4. Sugeneruokite masyva, kuris butu sudarytas is reiksmiu, kurios yra pirmame 3 uzdavinio masyve, bet nera antrame 3 uzdavinio masyve.
//

// 5 ---------------------------------------------------------------------------------------------------------------------------------------
// 5. Sugeneruokite masyva is elementu, kurie kartojasi abiejuose 3 uzdavinio masyvuose.
//

// 6 ---------------------------------------------------------------------------------------------------------------------------------------
// 6. Sugeneruokite 10 skaiciu masyva pagal taisykle: Du pirmi skaiciai - atsitiktiniai nuo 5 iki 25. Trecias - pirmo ir antro suma. 
// Ketvirtas - antro ir trecio suma. Penktas - trecio ir ketvirto suma ir t.t.
//

// JS-4 - 64 skaidre -----------------------------------------------------------------------------------------------------------------------
// 1 ----------------------------------------------------------------------------------------------------------------------------------------
// 1. Sukurkite objekta su keliomis savybemis, o tada pridekite nauja savybe.
// 

// 2 ---------------------------------------------------------------------------------------------------------------------------------------
// 2. Istrinkite savybe is objekto ir parodykite likusias savybes.
//

// 3 ---------------------------------------------------------------------------------------------------------------------------------------
// 3. Patikrinkite, ar tam tikra savybe egzistuoja objekte.
//

// 4 ---------------------------------------------------------------------------------------------------------------------------------------
// 4. Sukurti objekta, kuris turetu skaitines reiksmes. Apskaiciuoti visu savybiu reiksmiu suma.
//

// 5 ---------------------------------------------------------------------------------------------------------------------------------------
// 5. Sukurkite funkcija, kuri priima objekta ir grazina nauja objekta, kuriame yra tik tos savybes, kuriu reiksmes yra didesnes uz 
// tam tikra skaiciu.
//

// 6 ---------------------------------------------------------------------------------------------------------------------------------------
// 6. Sukurkite funkcija, kuri priima objekta ir grazina tekstini aprasyma su visomis savybemis.
//

// 7 ---------------------------------------------------------------------------------------------------------------------------------------
// 7. Sukurkite funkcija, kuri grazina objekto savybiu skaiciu.
//

// JS-4 - 66 skaidre -----------------------------------------------------------------------------------------------------------------------
// 1 ----------------------------------------------------------------------------------------------------------------------------------------
// 1. Isspausdinti visus masyvo elementus panaudojant for cikla ir array metoda.
// 

// 2 ---------------------------------------------------------------------------------------------------------------------------------------
// 2. Susumuoti visus masyvo skaicius trimis budais: naudoti for cikla ir du skirtingus array metodus.
//

// 3 ---------------------------------------------------------------------------------------------------------------------------------------
// 3. Is sugalvoto 10 zodziu sakinio sukurti masyva. Is to masyvo padaryti du masyvus: lyginiu indeksu zodzius iskelti i nauja
// masyva, nelyginiu indeksu zodzius - i kita masyva. Is tu atskiru masyvu padaryti du atskirus sakinius.
//

// 4 ---------------------------------------------------------------------------------------------------------------------------------------
// 4. Is skaiciu masyvo pasalinti tris elementus nuo to elemento, kurio reiksme yra maziausia.
//

// JS-4 - 67 skaidre -----------------------------------------------------------------------------------------------------------------------
// 1 ----------------------------------------------------------------------------------------------------------------------------------------
// 1. Rasti automobiliu markiu masyve "bentley" ir jei jo nera, ideti.
// 

// 2 ---------------------------------------------------------------------------------------------------------------------------------------
// 2. Sukurti prekiu masyva, kuriame butu pasikartojanciu elementu. Loopinti per masyva ir sukurti nauja unikaliu prekiu masyva 
// (naudoti indexOf) is pirmojo prekiu masyvo.
//

// 3 ---------------------------------------------------------------------------------------------------------------------------------------
// 3. Sukurti vaisiu masyva, kuriame butu pasikartojanciu elementu. Loopinti per masyva ir sukurti nauja unikaliu prekiu masyva 
// (naudoti includes) is pirmojo vaisiu masyvo.
//

// 4.1 ---------------------------------------------------------------------------------------------------------------------------------------
// 4.1 Sukurti skaiciu masyva:
// 4.1. Prasukti cikla ir lyginius skaicius pakeisti vardais;
//

// 4.2---------------------------------------------------------------------------------------------------------------------------------------
// 4.2. Panaudojant string metoda pakeisti visas raides i didziasias.
//

// JS-4 - 68 skaidre -----------------------------------------------------------------------------------------------------------------------
// 1 ----------------------------------------------------------------------------------------------------------------------------------------
// 1. Isspausdinti konsoleje objekto duomenis:

/*
let duomenys = {
    id: "0001",
    type: "donut",
    name: "Cake",
    ppu: 0.55,
    topping: [
        { id: "5001", type: "None" },
        { id: "5002", type: "Glazed" },
        { id: "5005", type: "Sugar" },
        { id: "5007", type: "Powdered Sugar" },
        { id: "5006", type: "Chocolate with Sprinkles" },
        { id: "5003", type: "Chocolate" },
        { id: "5004", type: "Maple" },
    ],
};
*/

// JS-4 - 69 skaidre -----------------------------------------------------------------------------------------------------------------------
// 1 ----------------------------------------------------------------------------------------------------------------------------------------
// 1. Atspausdinti duomenis is family ir knygos is nuorodos pagal pateikta pavyzdi. Sukurti masyva su knygu pavadinimais, kuriu isleidimo 
// metai velesni nei 2015m.

// knygos.js

// JS-4 - 70 skaidre -----------------------------------------------------------------------------------------------------------------------
// 1 ----------------------------------------------------------------------------------------------------------------------------------------
// Restorane pietavo trys seimos. Visi isleido skirtingas sumas pinigu. Apskaiciuokite kiek arbatpinigiu tures palikti kiekviena 
// seima ir kokia bus galutine sumokama pinigu suma, jei:
// Rezultatus atspausdinti konsoleje masyvu pavidalu.

// 1 ---------------------------------------------------------------------------------------------------------------------------------------
// 1. Saskaita maziau nei 50eur, paliekama 20% nuo saskaitos sumos;
//

// 2 ---------------------------------------------------------------------------------------------------------------------------------------
// 2. Saskaita didesne nei 50eur, bet maziau uz 200eur - 15%;
//

// 3 ---------------------------------------------------------------------------------------------------------------------------------------
// 3. Saskaita didesne ar lygi uz 200eur - 10%.
//

// JS-4 - 71 skaidre -----------------------------------------------------------------------------------------------------------------------
// 1 ----------------------------------------------------------------------------------------------------------------------------------------
// 1. Atspausdinti klausima ir teisinga atsakyma:          questions.js 

// 2 ---------------------------------------------------------------------------------------------------------------------------------------
// 2. Sukurti interaktyvia viktorina, naudojant prompt ir alert. Uzduokite vartotojui klausimus ir pateikite galimus pasirinkimus. 
// Jei vartotojas atsako teisingai, naudoti alert su zinute "Teisingai!". Jei atsakymas neteisingas - "Neteisingai". Baigus visus 
// klausimus, rodyti teisingu atsakymu skaiciu ir pasveikinimo zinute, jei vartotojas atsake daugiau nei 50% klausimu teisingai. 
// Neleisti vartotojui pateikti tuscio atsakymo ar kitokios nei skaicius reiksmes.
//

// 2.1 ---------------------------------------------------------------------------------------------------------------------------------------
//  2.1. Sukurkite masyva is 10 elementu. Kiekvienas masyvo elementas turi buti masyvas su atsitiktiniu kiekiu nuo 2 iki 20 elementu 
// (antro lygio masyvas). Elementu reiksmes - atsitiktinai parinktos raides is intervalo A-Z. Isrusiuokite antro lygio masyvus pagal 
// abecele (t.y. tuos kur su raidem).
//

// 2.2 ---------------------------------------------------------------------------------------------------------------------------------------
// 2.2. Isrusiuokite pirmo uzdavinio pirmo lygio masyva taip, kad elementai kuriu masyvai trumpiausi eitu pradzioje. Masyvai, kurie turi 
// bent viena "K" raide, visada butu didziojo masyvo pacioje pradzioje.
//

// 2.3 ---------------------------------------------------------------------------------------------------------------------------------------
// 2.3. Sukurkite masyva is 10 elementu. Masyvo reiksmes uzpildykite pagal taisykle: generuokite skaiciu nuo 0 iki 5. Ir sukurkite tokio 
// ilgio masyva, koks yra sugeneruotas skaicius. Jeigu sugeneruotas skaicius yra 0 - masyvo nekurkite, o irasykite tiesiogiai viena 
// atsitiktine reiksme nuo 0 iki 10. Antro lygio masyvo reiksmes uzpildykite atsitiktiniais skaiciais nuo 0 iki 10.
//

// 2.4 ---------------------------------------------------------------------------------------------------------------------------------------
// 2.4. Paskaiciuokite 3 uzdavinio masyvo visu reiksmiu suma ir isrusiuokite masyva taip, kad pirmiausiai eitu maziausios masyvo 
// reiksmes arba jeigu reiksme yra masyvas, to masyvo reiksmiu suma.
//

// 2.5 ---------------------------------------------------------------------------------------------------------------------------------------
// 2.5. Sugeneruokite 101 elemento masyva su atsitiktiniais skaiciais nuo 0 iki 300. Reiksmes kurios tame masyve yra ne unikalios 
// pergeneruokite is naujo taip, kad visos reiksmes masyve butu unikalios. Isrusiuokite masyva taip, kad jo didziausia reiksme butu 
// masyvo viduryje, o einant nuo jos link masyvo pradzios ir pabaigos reiksmes mazetu. Paskaiciuokite pirmos ir antros masyvo dalies 
// sumas (neskaiciuojant vidurines reiksmes). Jeigu sumu skirtumas (modulis, absoliutus dydis) yra didesnis nei 30 - rusiavima kartokite. 
// (Kad sumos nesiskirtu viena nuo kitos daugiau nei per 30).
//


