const input = document.querySelector('#todo')
const ol = document.querySelector('ol')
const arr = [];

function addTodo (){
    ol.innerHTML = ''
    for (let i = 0 ; i < arr.length ; i++) 
    {ol.innerHTML += `<li> ${arr[i]}
    <img onclick="delTodo(${i})" src="./Assets/Images/delete.png" alt="">
    <img onclick="editTodo(${i})" src="./Assets/Images/edit.png" alt="">
    </li> 
    `
  }
}

function renderScreen(){
    ol.innerHTML = ''
    arr.push(input.value)
    input.value=''
    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML += `
        <li>
        ${arr[i]}
        <img onclick="delTodo(${i})" src="./Assets/Images/delete.png" alt="">
        <img onclick="editTodo(${i})" src="./Assets/Images/edit.png" alt="">
        </li>
        `
    }
}


function delTodo(index) {
    arr.splice(index, 1)
    addTodo ()
}
function editTodo(index) {
    let editValue = prompt('Enter your updated value', arr[index])
    arr.splice(index, 1 , editValue)
    addTodo ()
}

