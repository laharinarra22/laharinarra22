// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// for (let i = 1; i <= 151; i++) {
//     const pokemon = document.createElement('div');
//     pokemon.classList.add('pokemon');
//     const label = document.createElement('span');
//     label.innerText = `#${i}`;
//     const newImg = document.createElement('img');
//     newImg.src = `${baseURL}${i}.png`


//     pokemon.appendChild(newImg);
//     pokemon.appendChild(label);
//     container.appendChild(pokemon);
// }

// let bn = document.querySelector("#btn");
// bn.onclick = function () {
//     console.log('hi');
// }

// let bn2 = document.querySelector('#btn2');

// bn2.addEventListener('click', function () {
//     console.log('iam clicked');
// })

// const but = document.querySelector('#hello');
// but.addEventListener('click', function () {
//     console.log('hello');
// });


// const butt = document.querySelector('#goodbye');
// butt.addEventListener('click', function () {
//     console.log('goodbye');
// });

// let botton = document.querySelector('#btn');
// let htag = document.querySelector('#text');

// let gen = function () {
//     return Math.floor(Math.random() * 255) + 1;
// }
// let random = function () {
//     return `rgb(${gen()},${gen()},${gen()})`;
// }

// let button = document.querySelector('button')
// let p = document.querySelector('p')

// button.addEventListener('click', function (e) {
//     p.style.backgroundColor = random();
//     e.stopPropagation()

// })

// p.addEventListener('click', function () {
//     p.classList.toggle('hide')
// })

// botton.addEventListener('click', function () {
//     let col = random();
//     htag.textContent = col;
//     document.body.style.backgroundColor = col;
// })

// let button = document.querySelectorAll('button');
// let h1s = document.querySelectorAll('h1');

// let colorize = function () {
//     this.style.backgroundColor = random();
//     this.style.color = random();
// }

// for (let but of button) {
//     but.addEventListener('click', colorize)
// }

// for (let h1 of h1s) {
//     h1.addEventListener('click', colorize)
// }

// let form = document.querySelector('#store');
// let h2 = document.querySelector('h2');

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     console.log(e)
//     let s = document.querySelector('#store').value;
//     console.log(s);
//     let create = document.createElement('h2');
//     console.log(create);
//     let b = create.append(s)
//     console.log(b);
//     let c = document.body.appendChild(create);
//     console.log(c);
//     document.querySelector('#store').value = '';

// })

// form.addEventListener('change', function (e) {
//     console.log('update');
// })

// form.addEventListener('input', function (e) {
//     h2.innerText = form.value;
//     console.log(e)
// })

// form.addEventListener('change', function (e) {
//     h2.innerText = form.value;
//     console.log(e)
// })

// form here its about async javascript

// let mul = function (a) {
//     return a * a;
// }

// let square = function (b) {
//     return mul(b)
// }

// let rightangle = function (c, d, e) {
//     return square(c) + square(d) === square(e)
// }

// console.log(rightangle(4, 5, 5))


// setTimeout(function () {
//     document.body.style.backgroundColor = 'red'
//     setTimeout(function () {
//         document.body.style.backgroundColor = 'orange'
//         setTimeout(function () {
//             document.body.style.backgroundColor = 'blue'
//         }, 1000)
//     }, 1000)
// }, 1000)

// let callbackeg = function (url, sucess, failure) {
//     let delay = Math.floor(Math.random() * 4500) + 500;

//     setTimeout(function () {
//         if (delay > 4000) {
//             failure('you  failed');
//         }
//         else {
//             sucess('you passed');
//         }
//     }, delay);
// }


// callbackeg
//     (
//         'www.google.com',
//         () => {
//             console.log('yay1');
//             callbackeg
//                 (
//                     'www.apple.com',
//                     () => {
//                         console.log('yay2');
//                         callbackeg
//                             (
//                                 'www.netflix.com',
//                                 () => {
//                                     console.log('yay3');
//                                 },
//                                 () => {
//                                     console.log('nah3');
//                                 }
//                             )
//                     },
//                     () => {
//                         console.log('nah2');
//                     }
//                 )
//         },
//         () => {
//             console.log('nah1');
//         }
//     )


// let fakepromise = function (url) {
//     return new Promise((resolve, reject) => {
//         let delay = Math.floor(Math.random() * 4500) + 500;
//         setTimeout(function () {
//             if (delay > 4000) {
//                 reject('you failed');
//             }
//             else {
//                 resolve(`you passed ${url}`);
//             }
//         }, delay)
//     })
// }


// async function makereq() {
//     try {
//         let data1 = await fakepromise('/page1')
//         console.log(data1)
//         let data2 = await fakepromise('/page2')
//         console.log(data2)
//         let data3 = await fakepromise('/page3')
//         console.log(data3)
//     }
//     catch (e) {
//         console.log(e);
//         console.log('attempt unsucessful')
//     }

// }



// fakepromise('google.com/page1')
//     .then((data) => {
//         console.log('it worked 1')
//         console.log(data)
//         return fakepromise('google.com/page2')
//     })
//     .then((data) => {
//         console.log('it worked 2')
//         console.log(data)
//         return fakepromise('google.com/page3')
//     })
//     .then((data) => {
//         console.log('it worked 3')
//         console.log(data)
//         return fakepromise('google.com/page4')
//     })
//     .then((data) => {
//         console.log('it worked 4')
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log('failed')
//         console.log(err)
//     })

// let delayedcolorchange = function (newcolor, delay) {
//     return new Promise((response, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = newcolor;
//             response();
//         }, delay)
//     }
//     )
// }

// delayedcolorchange('red', 1000)
//     .then(() => {
//         return delayedcolorchange('blue', 1000)
//     }
//     )
//     .then(() => {
//         return delayedcolorchange('yellow', 1000)
//     }
//     )
//     .then(() => {
//         return delayedcolorchange('orange', 1000)
//     }
//     )


// let enter = async (username, password) => {
//     if (!username || !password) throw 'missing credentials';
//     if (password === 'deepu@123') return 'success';
//     throw 'invalid password';
// }

// enter('deepu', 'deepu@123')
//     .then((data) => {
//         console.log('you entered')
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log('wrong wrong')
//         console.log(err)
//     })

// async function changecolor() {
//     await delayedcolorchange('red', 1000)
//     await delayedcolorchange('blue', 1000)
//     await delayedcolorchange('yellow', 1000)
//     await delayedcolorchange('pink', 1000)
// }

// async function print() {
//     await changecolor();
//     console.log('display completed')
// }

//for here its all about api's

// let data = `{
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// }`

// let dog = {
//     name: 'snofy',
//     yearofbirth: 2005,
//     age: 10,
//     placeofbirth: 'chennai',
//     deathyear: undefined
// }

//request via an xhr -xhr is a old way of doing http request

// let req = new XMLHttpRequest();

// req.onload = function () {
//     console.log('success')
//     let data = JSON.parse(req.responseText)
//     console.log(data.name, data.height)
// }

// req.onerror = function () {
//     console.log('error')
//     console.log(req)
// }

// req.open('GET', 'https://swapi.dev/api/people/5/')
// req.send()

// fetch('https://swapi.dev/api/people/5/')
//     .then((req) => {
//         console.log('success', req)
//         return req.json()
//     })
//     .then((data) => {
//         console.log(data)
//         return fetch('https://swapi.dev/api/people/4/')
//     })
//     .then((req) => {
//         console.log('second one success', req)
//         return req.json()
//     })
//     .catch((e) =>
//         console.log('failed', e)
//     )


// let starwars = async () => {
//     try {
//         let res = await fetch('https://swapi.dev/api/people/5/')
//         // let data = await res.json();
//         console.log(res)
//     }
//     catch (e) {
//         console.log('error', e)
//     }
// }

// starwars()


// axios.get('https://swapi.dev/api/people/5/')
//     .then((req) => {
//         console.log(req);
//     })
//     .catch((e) => {
//         console.log(e)
//     })

// let starwars = async function (id) {
//     try {
//         let res = await axios.get(`https://swapi.dev/api/people/${id}/`)
//         // console.log(res.data)
//         console.log(res)
//     }
//     catch (e) {
//         console.log(e)
//     }
// }

// starwars(6)


// let button = document.querySelector('#joki')

// button.addEventListener('click', function () {
//     joke()
// })

// button.addEventListener('click', async function () {
//     let text = await joke()
//     let a = document.createElement('h2')
//     a.append(text)
//     document.body.append(a)
// })


// let joke = async function () {
//     let config = { headers: { Accept: 'application/json' } }
//     let res = await axios.get('https://icanhazdadjoke.com/', config)
//     return res.data.joke
// }

// let joke = async function () {
//     let config = { headers: { Accept: 'application/json' } }
//     let res = await axios.get('https://icanhazdadjoke.com/', config)
//     console.log(res.data.joke)

//     let a = document.createElement('h2')
//     a.append(res.data.joke)
//     document.body.append(a)

// }

// let button = document.querySelector('#search')
// let input = document.querySelector('input')

// button.addEventListener('click', function (d) {
//     d.preventDefault()
//     let usersearch = input.value
//     let par = { params: { q: usersearch } }
//     axios.get(`https://api.tvmaze.com/search/shows`, par)
//         .then((res) => {
//             let images = document.body.querySelectorAll('img');
//             if (images.length > 0) {
//                 images.forEach(function (image) {
//                     image.remove();
//                 });
//             }
//             dispimg(res)
//             input.value = '';


//         })
//         .catch((e) => {
//             console.log('error', e)
//         })
// })

// let dispimg = function (res) {
//     for (let i = 0; i < res.data.length; i++) {
//         if (res.data[i].show.image) {
//             let a = document.createElement('img')
//             a.setAttribute('src', res.data[i].show.image.medium)
//             document.body.append(a)
//         }
//     }
// }


//factor functions
// let makecolor1 = function (r, g, b) {
//     let color = {}
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         let { r, g, b } = this;
//         return `rgb(${r},${g},${b})`
//     }
//     return color;
// }

// let firstcolor = makecolor1(35, 255, 150);


// constructor functions

// let makecolor = function (r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// makecolor.prototype.rgb = function () {
//     let { r, g, b } = this;
//     return `rgb(${r},${g},${b})`
// }

// let color = new makecolor(255, 35, 20)

//class

// class makecolor2 {
//     constructor(r, g, b, name) {
//         this.r = r
//         this.g = g
//         this.b = b
//         this.name = name
//     }
//     innerRGB() {
//         let { r, g, b } = this
//         return `${r},${g},${b}`
//     }
//     rgb() {
//         return `rgb(${this.innerRGB()})`
//     }
//     rgba(a = 1.0) {
//         return `rgba(${this.innerRGB()},${a})`
//     }
// }

// let color2 = new makecolor2(255, 255, 255, 'white')

//extends 

// class animal {
//     constructor(name, age, lives) {
//         this.name = name
//         this.age = age
//         this.lives = lives
//     }
// }


// class cat extends animal {

//     meow() {
//         return `${this.name} is shouting`
//     }

//     life() {
//         return `pet has ${this.lives} life`
//     }

//     old() {
//         return `pet is ${this.age} years old`
//     }
// }

// class dog extends cat {

//     bark() {
//         return `${this.name} is shouting`
//     }
// }

// class lion extends cat {

//     roar() {
//         return `${this.name} is shouting`
//     }

// }



// let pet = new dog('deepu', 10, 4)


//super

class animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}


class cat extends animal {
    constructor(name, age, lives) {
        super(name, age)
        this.lives = lives
    }
    meow() {
        return `${this.name} is shouting`
    }

    life() {
        return `pet has ${this.lives} life`
    }

    old() {
        return `pet is ${this.age} years old`
    }
}

let pet = new cat('deepu', 10, 4)