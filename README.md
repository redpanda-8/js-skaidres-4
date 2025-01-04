# js-skaidres-4
Pradmenys

## 16 skaidre

1. Parasykite funkcija, kuri priima masyva ir prideda i ji nauja elementa. Funkcija turi grazinti atnaujinta masyva. Rezultata atspausdinti konsoleje.

2. Parasykite funkcija, kuri susumuoja visus skaicius masyve naudodama reduce metoda. Grazinkite suma. Rezultata atspausdinti konsoleje.

3. Parasykite funkcija, kuri priima masyva su skaiciais ir rusiuoja ji nuo maziausio iki didziausio, naudojant sort metoda. Rezultata atspausdinti konsoleje.

4. Parasykite funkcija, kuri priima masyva ir grazina nauja masyva, kuris apima elementus nuo tam tikros pradzios iki pabaigos indekso (neitraukiant pabaigos). Naudokite slice metoda. Rezultata atspausdinti konsoleje.

5. Parasykite funkcija, kuri sujungia du masyvus i viena naudojant concat metoda. Rezultata atspausdinti konsoleje.

6. Parasykite funkcija, kuri priima masyva su skaiciais ir grazina tik tuos skaicius, kurie yra didesni uz 10, naudojant filter metoda. Rezultata atspausdinti konsoleje.

7. Parasykite funkcija, kuri priima masyva ir grazina pirmaji elementa, kuris yra didesnis uz 10, naudojant find metoda. Rezultata atspausdinti konsoleje.

8. Parasykite funkcija, kuri priima masyva ir grazina nauja masyva, kuriame visi elementai yra padauginti is 2, naudojant map metoda. Rezultata atspausdinti konsoleje.

## 62 skaidre

1. Sugeneruokite masyva is 30 elementu (indeksai nuo 0 iki 29), kuriu reiksmes yra atsitiktiniai skaiciai nuo 5 iki 25.

2. Naudodamiesi 1 uzdavinio masyvu:

    1. Suskaiciuokite kiek masyve yra reiksmiu didesniu uz 10;

    2. Raskite didziausia masyvo reiksme ir jos indeksa arba indeksus jeigu yra keli;

    3. Suskaiciuokite visu poriniu (lyginiu) indeksu reiksmiu suma;

    4. Sukurkite nauja masyva, kurio reiksmes yra 1 uzdavinio masyvo reiksmes minus tos reiksmes indeksas;

    5. Papildykite masyva papildomais 10 elementu su reiksmemis nuo 5 iki 25, kad bendras masyvas padidetu iki indekso 39;

    6. Is masyvo elementu sukurkite du naujus masyvus. Vienas turi buti sudarytas is neporiniu indekso reiksmiu, o kitas is poriniu;

    7. Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni uz 15;

    8. Suraskite pirma (maziausia) indeksa, kurio elemento reiksme didesne uz 10;


## 63 skaidre

1. Sugeneruokite masyva, kurio reiksmes atsitiktines raides A, B, C, D, o ilgis 200. Suskaiciuokite kiek yra kiekvienos raides.

2. Isrusiuokite 1 uzdavinio masyva pagal abecele.

3. Sugeneruokite du masyvus, kuriu reiksmes yra atsitiktiniai skaiciai nuo 100 iki 999. Masyvu ilgiai 100. Masyvu reiksmes turi buti unikalios savo masyve (t.y. neturi kartotis).

4. Sugeneruokite masyva, kuris butu sudarytas is reiksmiu, kurios yra pirmame 3 uzdavinio masyve, bet nera antrame 3 uzdavinio masyve.

5. Sugeneruokite masyva is elementu, kurie kartojasi abiejuose 3 uzdavinio masyvuose.

6. Sugeneruokite 10 skaiciu masyva pagal taisykle: Du pirmi skaiciai - atsitiktiniai nuo 5 iki 25. Trecias - pirmo ir antro suma. Ketvirtas - antro ir trecio suma. Penktas - trecio ir ketvirto suma ir t.t.

## 64 skaidre

1. Sukurkite objekta su keliomis savybemis, o tada pridekite nauja savybe.

2. Istrinkite savybe is objekto ir parodykite likusias savybes.

3. Patikrinkite, ar tam tikra savybe egzistuoja objekte.

4. Sukurti objekta, kuris turetu skaitines reiksmes. Apskaiciuoti visu savybiu reiksmiu suma.

5. Sukurkite funkcija, kuri priima objekta ir grazina nauja objekta, kuriame yra tik tos savybes, kuriu reiksmes yra didesnes uz tam tikra skaiciu.

6. Sukurkite funkcija, kuri priima objekta ir grazina tekstini aprasyma su visomis savybemis.

7. Sukurkite funkcija, kuri grazina objekto savybiu skaiciu.

## 66 skaidre 

1. Isspausdinti visus masyvo elementus panaudojant for cikla ir array metoda.

2. Susumuoti visus masyvo skaicius trimis budais: naudoti for cikla ir du skirtingus array metodus.

3. Is sugalvoto 10 zodziu sakinio sukurti masyva. Is to masyvo padaryti du masyvus: lyginiu indeksu zodzius iskelti i nauja masyva, nelyginiu indeksu zodzius - i kita masyva. Is tu atskiru masyvu padaryti du atskirus sakinius.

4. Is skaiciu masyvo pasalinti tris elementus nuo to elemento, kurio reiksme yra maziausia.

## 67 skaidre

1. Rasti automobiliu markiu masyve "bentley" ir jei jo nera, ideti.

2. Sukurti prekiu masyva, kuriame butu pasikartojanciu elementu. Loopinti per masyva ir sukurti nauja unikaliu prekiu masyva (naudoti indexOf) is pirmojo prekiu masyvo.

3. Sukurti vaisiu masyva, kuriame butu pasikartojanciu elementu. Loopinti per masyva ir sukurti nauja unikaliu prekiu masyva (naudoti includes) is pirmojo vaisiu masyvo.

4. Sukurti skaiciu masyva:
    1. Prasukti cikla ir lyginius skaicius pakeisti vardais;
    2. Panaudojant string metoda pakeisti visas raides i didziasias.

## 68 skaidre

Isspausdinti konsoleje objekto duomenis:
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

## 69 skaidre

Atspausdinti duomenis is family ir knygos is nuorodos pagal pateikta pavyzdi. Sukurti masyva su knygu pavadinimais, kuriu isleidimo metai velesni nei 2015m.

knygos.js

## 70 skaidre

Restorane pietavo trys seimos. Visi isleido skirtingas sumas pinigu. Apskaiciuokite kiek arbatpinigiu tures palikti kiekviena seima ir kokia bus galutine sumokama pinigu suma, jei: 

1. Saskaita maziau nei 50eur, paliekama 20% nuo saskaitos sumos;

2. Saskaita didesne nei 50eur, bet maziau uz 200eur - 15%;

3. Saskaita didesne ar lygi uz 200eur - 10%.

Rezultatus atspausdinti konsoleje masyvu pavidalu.

## 71 skaidre

1. Atspausdinti klausima ir teisinga atsakyma:          questions.js

2. Sukurti interaktyvia viktorina, naudojant prompt ir alert. Uzduokite vartotojui klausimus ir pateikite galimus pasirinkimus. Jei vartotojas atsako teisingai, naudoti alert su zinute "Teisingai!". Jei atsakymas neteisingas - "Neteisingai". Baigus visus klausimus, rodyti teisingu atsakymu skaiciu ir pasveikinimo zinute, jei vartotojas atsake daugiau nei 50% klausimu teisingai. Neleisti vartotojui pateikti tuscio atsakymo ar kitokios nei skaicius reiksmes.

    1. Sukurkite masyva is 10 elementu. Kiekvienas masyvo elementas turi buti masyvas su atsitiktiniu kiekiu nuo 2 iki 20 elementu (antro lygio masyvas). Elementu reiksmes - atsitiktinai parinktos raides is intervalo A-Z. Isrusiuokite antro lygio masyvus pagal abecele (t.y. tuos kur su raidem).

    2. Isrusiuokite pirmo uzdavinio pirmo lygio masyva taip, kad elementai kuriu masyvai trumpiausi eitu pradzioje. Masyvai, kurie turi bent viena "K" raide, visada butu didziojo masyvo pacioje pradzioje.

    3. Sukurkite masyva is 10 elementu. Masyvo reiksmes uzpildykite pagal taisykle: generuokite skaiciu nuo 0 iki 5. Ir sukurkite tokio ilgio masyva, koks yra sugeneruotas skaicius. Jeigu sugeneruotas skaicius yra 0 - masyvo nekurkite, o irasykite tiesiogiai viena atsitiktine reiksme nuo 0 iki 10. Antro lygio masyvo reiksmes uzpildykite atsitiktiniais skaiciais nuo 0 iki 10.

    4. Paskaiciuokite 3 uzdavinio masyvo visu reiksmiu suma ir isrusiuokite masyva taip, kad pirmiausiai eitu maziausios masyvo reiksmes arba jeigu reiksme yra masyvas, to masyvo reiksmiu suma.

    5. Sugeneruokite 101 elemento masyva su atsitiktiniais skaiciais nuo 0 iki 300. Reiksmes kurios tame masyve yra ne unikalios pergeneruokite is naujo taip, kad visos reiksmes masyve butu unikalios. Isrusiuokite masyva taip, kad jo didziausia reiksme butu masyvo viduryje, o einant nuo jos link masyvo pradzios ir pabaigos reiksmes mazetu. Paskaiciuokite pirmos ir antros masyvo dalies sumas (neskaiciuojant vidurines reiksmes). Jeigu sumu skirtumas (modulis, absoliutus dydis) yra didesnis nei 30 - rusiavima kartokite. (Kad sumos nesiskirtu viena nuo kitos daugiau nei per 30).