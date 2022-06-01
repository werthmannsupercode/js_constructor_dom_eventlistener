// CONSTRUCTOR ============================================================================
console.log("%cCONSTRUCTOR", 'color: red');

// Lev1_1
console.log("%cLev1_1", 'color: green');

class Ball {
    constructor(ballType = "regular") {
        this.ballType = ballType
    }

}

let ball1 = new Ball();
let ball2 = new Ball("super");

console.log(ball1.ballType);	//=> "regular"
console.log(ball2.ballType);	//=> "super"


// Lev1_2
console.log("%cLev1_2", 'color: green');

class Person {
    constructor(name, alter) {
        this.name = String(name);
        this.alter = Number(alter);
    }
    info() {
        return `${this.name} is ${this.alter} years old.`;
    }
}

let person1 = new Person("Emanuela", 18);
console.log(person1.info());

// Lev1_3
console.log("%cLev1_3", 'color: green');

let ism = document.getElementById('ism');
let age = document.getElementById('age');
let result = document.getElementById('result');
let examCheck = document.getElementById('examCheck');



class SuperPerson extends Person {
    constructor(name, alter, pruefung) {
        super(name, alter);
        this.pruefung = pruefung;
    }

    write() {

        if (this.pruefung.checked) {
            console.log("bestanden");
            result.style.color = "black";
        }

        else if (this.pruefung) {
            console.log("nicht bestanden");
            result.style.color = "red";
        }

        result.innerHTML += `<li>${this.name}, ${this.alter}</li><br>`;
    }
}

let losgehts = () => {
    let person = new SuperPerson(ism.value, age.value, examCheck)
    person.write();
}

// DOM ============================================================================
console.log("%cDOM", 'color: red');

// Lev1_2
console.log("%cLev1_2", 'color: green');

let toCange = document.getElementsByClassName('example');

let cangeBackgroundColor = () => {

    for (let k = 0; k < toCange.length; k++)
        toCange[k].style.backgroundColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
}

// Lev2_1
console.log("%cLev2_1", 'color: green');

let navHome = document.getElementById('navHome');

let changeNav = () => {
    navHome.classList.toggle('home');
}

// Lev2_2
console.log("%cLev2_2", 'color: green');

let vorname = document.getElementById('vorname');
let nachname = document.getElementById('nachname');
let land = document.getElementById('land');

let returnInfos = () => {
    console.log(`Full Name: ${vorname.value} ${nachname.value}, Land: ${land.value}`);
}

// Lev2_3
console.log("%cLev2_3", 'color: green');

let menuColored = document.getElementsByClassName('navLev2_3');
let buttonColored = document.getElementsByClassName('activeLev2_3');

let changeNavLev2_3 = () => {
    for (let k = 0; k < menuColored.length; k++) {
        menuColored[0].style.backgroundColor = "#f6c89f";
        menuColored[1].style.backgroundColor = "#ffe7d1";
        menuColored[2].style.backgroundColor = "#4b8e8d";
    }

    buttonColored[0].style.backgroundColor = "#396362";
}