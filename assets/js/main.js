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

// Lev2_4
console.log("%cLev2_4", 'color: green');

let button = document.getElementById('button');
let farbeAuswahlen = document.getElementById('farbeAuswahlen');
let sectionLev2_4 = document.getElementById('sectionLev2_4');
console.log(farbeAuswahlen.value);

button.addEventListener('click', (e) => {
    if (farbeAuswahlen.value == 'Medium Orchid') {
        sectionLev2_4.style.backgroundColor = "tomato";
    }
})

console.log("noch nicht fertig");

// Lev2_6
console.log("%cLev2_6", 'color: green');

let data = [
    {
        id: "0",
        author: "Alejandro Escamilla",
        width: 5616,
        height: 3744,
        url: "https://unsplash.com/photos/yC-Yzbqy7PY",
        downloadurl: "https://picsum.photos/id/0/5616/3744"
    },
    {
        id: "1",
        author: "Alejandro Escamilla",
        width: 5616,
        height: 3744,
        url: "https://unsplash.com/photos/LNRyGwIJr5c",
        downloadurl: "https://picsum.photos/id/1/5616/3744"
    },
    {
        id: "10",
        author: "Paul Jarvis",
        width: 2500,
        height: 1667,
        url: "https://unsplash.com/photos/6J--NXulQCs",
        downloadurl: "https://picsum.photos/id/10/2500/1667"
    },
    {
        id: "100",
        author: "Tina Rataj",
        width: 2500,
        height: 1656,
        url: "https://unsplash.com/photos/pwaaqfoMibI",
        downloadurl: "https://picsum.photos/id/100/2500/1656"
    },
    {
        id: "1000",
        author: "Lukas Budimaier",
        width: 5626,
        height: 3635,
        url: "https://unsplash.com/photos/6cY-FvMlmkQ",
        downloadurl: "https://picsum.photos/id/1000/5626/3635"
    },
    {
        id: "1001",
        author: "Danielle MacInnes",
        width: 5616,
        height: 3744,
        url: "https://unsplash.com/photos/1DkWWN1dr-s",
        downloadurl: "https://picsum.photos/id/1001/5616/3744"
    },
    {
        id: "1002",
        author: "NASA",
        width: 4312,
        height: 2868,
        url: "https://unsplash.com/photos/6-jTZysYY_U",
        downloadurl: "https://picsum.photos/id/1002/4312/2868"
    },
    {
        id: "1003",
        author: "E+N Photographies",
        width: 1181,
        height: 1772,
        url: "https://unsplash.com/photos/GYumuBnTqKc",
        downloadurl: "https://picsum.photos/id/1003/1181/1772"
    },
    {
        id: "1004",
        author: "Greg Rakozy",
        width: 5616,
        height: 3744,
        url: "https://unsplash.com/photos/SSxIGsySh8o",
        downloadurl: "https://picsum.photos/id/1004/5616/3744"
    },
    {
        id: "1005",
        author: "Matthew Wiebe",
        width: 5760,
        height: 3840,
        url: "https://unsplash.com/photos/tBtuxtLvAZs",
        downloadurl: "https://picsum.photos/id/1005/5760/3840"
    },
    {
        id: "1006",
        author: "Vladimir Kudinov",
        width: 3000,
        height: 2000,
        url: "https://unsplash.com/photos/-wWRHIUklxM",
        downloadurl: "https://picsum.photos/id/1006/3000/2000"
    },
    {
        id: "1008",
        author: "Benjamin Combs",
        width: 5616,
        height: 3744,
        url: "https://unsplash.com/photos/5L4XAgMSno0",
        downloadurl: "https://picsum.photos/id/1008/5616/3744"
    },
    {
        id: "1009",
        author: "Christopher Campbell",
        width: 5000,
        height: 7502,
        url: "https://unsplash.com/photos/CMWRIzyMKZk",
        downloadurl: "https://picsum.photos/id/1009/5000/7502"
    },
    {
        id: "101",
        author: "Christian Bardenhorst",
        width: 2621,
        height: 1747,
        url: "https://unsplash.com/photos/8lMhzUjD1Wk",
        downloadurl: "https://picsum.photos/id/101/2621/1747"
    },
    {
        id: "1010",
        author: "Samantha Sophia",
        width: 5184,
        height: 3456,
        url: "https://unsplash.com/photos/NaWKMlp3tVs",
        downloadurl: "https://picsum.photos/id/1010/5184/3456"
    },
    {
        id: "1011",
        author: "Roberto Nickson",
        width: 5472,
        height: 3648,
        url: "https://unsplash.com/photos/7BjmDICVloE",
        downloadurl: "https://picsum.photos/id/1011/5472/3648"
    },
    {
        id: "1012",
        author: "Scott Webb",
        width: 3973,
        height: 2639,
        url: "https://unsplash.com/photos/uAgLGG1WBd4",
        downloadurl: "https://picsum.photos/id/1012/3973/2639"
    },
    {
        id: "1013",
        author: "Cayton Heath",
        width: 4256,
        height: 2832,
        url: "https://unsplash.com/photos/D8LcRLwZyPs",
        downloadurl: "https://picsum.photos/id/1013/4256/2832"
    },
    {
        id: "1014",
        author: "Oscar Keys",
        width: 6016,
        height: 4000,
        url: "https://unsplash.com/photos/AmPRUnRb6N0",
        downloadurl: "https://picsum.photos/id/1014/6016/4000"
    },
    {
        id: "1015",
        author: "Alexey Topolyanskiy",
        width: 6000,
        height: 4000,
        url: "https://unsplash.com/photos/-oWyJoSqBRM",
        downloadurl: "https://picsum.photos/id/1015/6000/4000"
    },
    {
        id: "1016",
        author: "Philippe Wuyts",
        width: 3844,
        height: 2563,
        url: "https://unsplash.com/photos/_h7aBovKia4",
        downloadurl: "https://picsum.photos/id/1016/3844/2563"
    },
    {
        id: "1018",
        author: "Andrew Ridley",
        width: 3914,
        height: 2935,
        url: "https://unsplash.com/photos/Kt5hRENuotI",
        downloadurl: "https://picsum.photos/id/1018/3914/2935"
    },
    {
        id: "1019",
        author: "Patrick Fore",
        width: 5472,
        height: 3648,
        url: "https://unsplash.com/photos/V6s1cmE39XM",
        downloadurl: "https://picsum.photos/id/1019/5472/3648"
    },
    {
        id: "102",
        author: "Ben Moore",
        width: 4320,
        height: 3240,
        url: "https://unsplash.com/photos/pJILiyPdrXI",
        downloadurl: "https://picsum.photos/id/102/4320/3240"
    },
    {
        id: "1020",
        author: "Adam Willoughby-Knox",
        width: 4288,
        height: 2848,
        url: "https://unsplash.com/photos/_snqARKTgoc",
        downloadurl: "https://picsum.photos/id/1020/4288/2848"
    },
    {
        id: "1021",
        author: "Frances Gunn",
        width: 2048,
        height: 1206,
        url: "https://unsplash.com/photos/8BmNurlVR6M",
        downloadurl: "https://picsum.photos/id/1021/2048/1206"
    },
    {
        id: "1022",
        author: "Vashishtha Jogi",
        width: 6000,
        height: 3376,
        url: "https://unsplash.com/photos/bClr95glx6k",
        downloadurl: "https://picsum.photos/id/1022/6000/3376"
    },
    {
        id: "1023",
        author: "William Hook",
        width: 3955,
        height: 2094,
        url: "https://unsplash.com/photos/93Ep1dhTd2s",
        downloadurl: "https://picsum.photos/id/1023/3955/2094"
    },
    {
        id: "1024",
        author: "Мартин Тасев",
        width: 1920,
        height: 1280,
        url: "https://unsplash.com/photos/7ALI0RYyq6s",
        downloadurl: "https://picsum.photos/id/1024/1920/1280"
    },
    {
        id: "1025",
        author: "Matthew Wiebe",
        width: 4951,
        height: 3301,
        url: "https://unsplash.com/photos/U5rMrSI7Pn4",
        downloadurl: "https://picsum.photos/id/1025/4951/3301"
    }
]

let lev2_6 = document.getElementById("Lev2_6");
let bild = document.createElement('img');
// let bildPaste = lev2_6.appendChild(bild);
// bildPaste.src = data.downloard_url;
// console.log(data);

let showBild = () => {
    let bildPaste = lev2_6.appendChild(bild);
    bildPaste.src = data[Math.floor(Math.random() * 30)].downloadurl;
    bildPaste.style.width = "20%";
}

// Lev2_7
console.log("%cLev2_7", 'color: green');

let lev2_7 = document.getElementById("Lev2_7");
let button27 = document.getElementById("buttonLev2_7");
let i = 0;
let div = document.createElement('div');
div.classList.add('umwickeln');

button27.addEventListener("click", () => {
    let p = document.createElement('p');
    p.classList.add('rechteck');
    lev2_7.appendChild(div);
    div.appendChild(p);
    i++
    p.innerHTML = i;
    let pNodes = div.childNodes;
    for (let k = 0; k < pNodes.length; k++) {
        if (k == 0 || k == 10 || k == 20 || k == 30 || k == 40 || k == 50 || k == 60) {
            pNodes[k].classList.add('weiss');
        }
    }
})

// Lev2_8
console.log("%cLev2_8", 'color: green');

let userInput = document.getElementById('userinput');
let enter = document.getElementById('enter');
let ul = document.getElementById('ul28');
let li = document.createElement('li');

enter.addEventListener('click', () => {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = userInput.value;
})

// Lev3_1
console.log("%cLev3_1", 'color: green');

let lev3_1 = document.getElementById('Lev3_1');

let datum = new Date();

let anzahlDerFreitage = (jahr) => {
    let counter = 0;
    let monat;

    for (monat = 0; monat < 12; monat++) {
        datum.setFullYear(jahr, monat, 13);
        if (datum.getDay() == 5) {
            counter++;
        }
    }
    return counter;
}
anzahlDerFreitage(2022);

let freitag13 = (jahr) => {
    let h1 = document.createElement('h1');
    lev3_1.appendChild(h1);
    h1.textContent = `Das Jahr ${jahr} hat ${anzahlDerFreitage(jahr)} Freitage`;
    for (let monat = 0; monat < 12; monat++) {
        datum.setFullYear(jahr, monat, 13);
        if (datum.getDay() == 5) {
            let p = document.createElement('p');
            lev3_1.appendChild(p);
            p.textContent += datum;
        }
    }
}

freitag13(2015);
freitag13(2022);
freitag13(2016);
freitag13(2020);
