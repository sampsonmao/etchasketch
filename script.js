const flexContainer = document.querySelector('.flexContainer')

let gridSize = prompt('Enter grid size')
let numBoxes = 0
while (numBoxes < gridSize**2) {
    let box = document.createElement('div')
    box.classList.add('box')
    box.style.height = 100/gridSize + '%'
    box.style.width = 100/gridSize + '%'
    flexContainer.appendChild(box)
    box.addEventListener('mouseenter', changeColor)
    numBoxes++ 
}

function changeColor(e) {
    e.target.style.background = 'black'
}


function erase() {
    let boxes = document.body.getElementsByClassName('box')
    for (i = 0; i<boxes.length; i++) {
        boxes[i].style.background = "dodgerblue"
       }
    }