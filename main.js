//task 1
// Дано масив [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]; Знайти максимальне значення масиву.
let array = [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]
const MAX_NUMBER =(arr)=> Math.max.apply(Math, arr)
console.log(MAX_NUMBER(array))


//task 2 
// Дано масив [“test”, 12, undefined, null, -5, “javascript”, “1”, false, true, 0 , “!”].
//  Створити новий масив де будуть тільки Стрінгові значення.

let task2  = ["test", 12, undefined, null, -5, "javascript", "1", false, true, 0 , '!'];
const FIND_String = (arr)=> {
    let result = []
    for(let i=0; i<arr.length; i++){
        if(typeof(arr[i]) =="string"){
            result.push(arr[i])
        }
    }
    return result
}
console.log(FIND_String(task2))

//task 3

// Дано колекцію - [{name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"}, {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}] – 
// Вивести всіх юзерів з типом user.
//  Вивести юзерів які мають хоббі hiking.
//  Додати можливість додати нове поле для всіх юзерів – job (true/false)

let collect = [ {name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"},
                {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"},
                {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}]

const USER =(arr) =>{
    let users = []
    for(let i =0;i<arr.length; i++){
        if(arr[i].type==="user"){
            users.push(arr[i])
            console.log(arr[i])
        }
    }
    
}
USER(collect)


const USER_HIKING = (arr)=>{
    for(let i =0;i<arr.length; i++){
        for(let j =0; j<arr[i].hobby.length; j++){
            if(arr[i].hobby[j]=="hiking"){
                console.log(arr[i])
            }
        }
    }
}

USER_HIKING(collect)

const JOB_KEY = (arr) =>{
    add = false
    for(let i =0;i<arr.length; i++){
        add = confirm("Has job?")
        if (add){
            arr[i].job = prompt("Enter job title: ")
        }else{
            arr[i].job ="none";
        }
    }
    console.log(collect)
}

// JOB_KEY(collect)


//task 4 
// Додати на сторінку івент який буде викидати алерт як тільки ми захочемо скопіювати текст з сторінки(додайте 1 рядок будь якого тексту) і сповіщати що це інтелектуальна власність власника.

let text = document.querySelector("#info")
text.addEventListener("copy", _=(event)=>{
        event.preventDefault()
        alert("Це інтелектуальна власність власника!")
})
//task 5
// https://restcountries.eu/rest/v2/all – АПІ endpoint для країн. Вивести нумерований список з іменами всіх країн та її столицею на сторінку, назву країни зробити великими буквами. 


let list  = document.querySelector("#info")

fetch('https://restcountries.eu/rest/v2/all')
  .then((res) => res.json())
  .then(itemGenerator);

function itemGenerator(country) {
    country.forEach((country) => {
        list.insertAdjacentHTML(
        "beforeend",
        `
        <li>
            <p>Країна: <span class="country-name">${country.name}</span></p>
            <p>Столиця: ${country.capital}</p>
        </li>
        `
      );
    });
  }
