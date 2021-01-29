var buttons = document.getElementById('number-buttons');
buttons.addEventListener('click',handleButtons);

function handleButtons(event){
    console.log(event.target.innerText);
}