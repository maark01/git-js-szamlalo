//alapérték felvétele
let count = 0;

//gombok és egyéb elemek eltárolása változókba
const value = document.getElementById("value");
//const decrease = document.getElementById("decrease");
//const reset = document.getElementById("reset");
//const increase = document.getElementById("increase");
const btns = document.querySelectorAll(".btn");

//ciklussal végiglépkedünk az eltárolt gombokon, amelyen rajta van a .btn class

btns.forEach((btn) => {

    //az összes gomb közül, amelyeket bejárjunk ciklussal, azt kattintom meg, amelyik az aktuális ciklusfutáskor jön a sorba (első futás -> 0. indexű gömb (decrease) stb...)
    btn.addEventListener("click", (e) => {

        //az éppen aktuális megkattintott gombon milyen class/classok vannak
        const style = e.currentTarget.classList;

        //ha az aktuálisan megkattintott gombok class-ai közül tartalmazza a "decrease" class-t
        if (style.contains("decrease")) {
        
            //csökkentjük az alapértéket
            count--;
        } 

        else if (style.contains("increase")) {
        
            //alapérték növelés
            count++;
            
        }

        else {

            //alapértelmezett érték null
            count = 0;
        }

        if (count > 0) {
            value.style.color = "green";
        }

        else if (count < 0) {
            value.style.color = "red";
        }

        else {
            value.style.color = "black";
        }

        value.textContent = count;
    })
})





















/*
//Egyszerű, lusta módszer
increase.addEventListener("click", () => {
    //növelem az alapértéket eggyel
    count++;

    //megnézem, az alapérték nagyobb-e mint 0
    if (count > 0) {

        //ha nagyobb, hozzáadok egy zöld betűszínt
        value.style.color = "green";
    }

    //majd az alapértékem aktuális értékét beállítom a value id-val ellátott span-nek
    value.textContent = count;
})

decrease.addEventListener("click", () => {
    //csökkente az alapértéket eggyel
    count--;

    //megnézem, az alapérték kisebb-e mint 0
    if (count < 0) {

        //ha kisebb, hozzáadok egy piros betűszínt
        value.style.color = "red";
    }

    //majd az alapértékem aktuális értékét beállítom a value id-val ellátott span-nek
    value.textContent = count;
})

reset.addEventListener("click", () => {
    //alapértéket visszaállítjuk nullára
    count = 0;

    value.style.color ="black";

    value.textContent = count;
})
*/