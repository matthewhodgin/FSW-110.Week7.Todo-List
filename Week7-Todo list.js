var favoriteColor;

function initForm(){
    document.getElementById("color").selectIndex="";
    document.getElementById("color").addEventListerner("input text");
}

let btnClear = document.querySelector('button');
let inputs = document.querySelectorAll('input');

btnClear.addEventListener('click', (e) => {
    e.preventDefault()

var color = document.createElement("p");
color.setAttribute("name", "color");
color.textContent=document.getElementById("color").value

document.body.appendChild(color);

var birthplace = document.createElement("p");
birthplace.setAttribute("name", "birthplace");
birthplace.textContent=document.getElementById("birthplace").value

document.body.appendChild(birthplace);

var remove = document.createElement("input");
remove.setAttribute("name", "delete");
remove.setAttribute("type", "button");
remove.setAttribute("value", "delete");

document.body.appendChild(remove);

remove.addEventListener("click", () => {
    document.body.removeChild(remove);
    document.body.removeChild(color);
    document.body.removeChild(birthplace);
})

    inputs.forEach(input => input.value = '');
})