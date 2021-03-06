const flexContainer = document.querySelector('.flexContainer')

let gridSize = 50
let numBoxes = 0
while (numBoxes < gridSize**2) {
    let box = document.createElement('div')
    box.classList.add('box')
    box.style.height = 500/gridSize + 'px'
    box.style.width = 500/gridSize + 'px'
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
        boxes[i].style.background = "white"
       }
    }