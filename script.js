const btn = document.getElementById('btn')

let bomp = setTimeout(function () {
    console.log('the bomb bombed');
}, 5000)

btn.addEventListener('click', function () {
    clearTimeout(bomp)
    console.log('hero came and stopped the bomb');
})


const value = document.getElementById('value')
let count = 5

value.textContent = 0

let interval = setInterval(function() {
    count -= 1
    value.textContent = count
    if (count === 0){
        value.textContent = 'we exploded'
        clearInterval(interval)
    }
}, 1000);




const todo = document.getElementById('todo')
const addbtn = document.getElementById('addbtn')
const list = document.getElementById('list')

let todos = getlocalstorage()
let res =   todos.map((item) => {
    console.log(item);
})

window.addEventListener('DOMContentLoaded', () => {
    let displaytodos = todos.map((todo) => {
        return `
            <li>${todo.value}</li>
            <button>delete</button>
        `
    })
    displaytodos = displaytodos.join(' ')
    list.innerHTML = displaytodos
})

let id = new Date().getMilliseconds().toString()


addbtn.addEventListener('click', () => {
    addlocalstorage(id, todo.value)
})


function getlocalstorage() {
    if(localStorage.getItem('todos'))
        return JSON.parse(localStorage.getItem('todos'))
    else    
        return []
}

function addlocalstorage (id, value){
    let todos = {id, value}
    let items = getlocalstorage()
    items.push(todos)
    localStorage.setItem('todos', JSON.stringify(items))
}


const element = document.getElementById('element')

const article = document.createElement('article')

const atrr = document.createAttribute('id')

article.setAttributeNode(atrr)

element.appendChild(article)