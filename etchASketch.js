function populateGrid(size) {
    const mainContainer = document.querySelector("#container");
    let smaller = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight; 

    mainContainer.style.height = `${smaller - 200}px`;
    mainContainer.style.width = `${smaller - 200}px`;

    for (let i=0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j=0; j < size; j++) {
            let gridBox = document.createElement("div");
            gridBox.classList.add("grid-box");
            gridBox.setAttribute("data-opacity", "0");

            row.appendChild(gridBox);

            // For all black boxes
            // gridBox.addEventListener('mouseenter', (e) => {
            //     e.target.style.backgroundColor = 'black';
            //     e.target.style.border = 'solid black 2px';
            // })

            // For multicoloured boxes
            gridBox.addEventListener('mouseenter', (e) => {
                let randomRgbValues = [];
                for (let i=0; i < 3; i++) {
                    randomRgbValues.push(Math.floor(Math.random() * 255) + 1)
                }
                let [r, g, b] = randomRgbValues;
                
                let currentOpacity = parseFloat(gridBox.getAttribute("data-opacity"));
                let opacity = Math.min(currentOpacity + 0.1, 1);
                gridBox.setAttribute("data-opacity", opacity.toString());

                e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                e.target.style.opacity = opacity;
                e.target.style.border = `solid rgb(${r}, ${g}, ${b}) 2px`;
            })
        }
        mainContainer.appendChild(row);
    }

    return size;
}

window.addEventListener('resize', () => {
    const mainContainer = document.querySelector("#container");
    let smaller = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight; 

    mainContainer.style.height = `${smaller - 200}px`;
    mainContainer.style.width = `${smaller - 200}px`;
})

const resizeButton = document.querySelector("#resize");
const clearButton = document.querySelector("#clear");

resizeButton.addEventListener('click', () => {
    let size = prompt("How many squares per side do you want?");
    const mainContainer = document.querySelector("#container");
    mainContainer.innerHTML = '';
    populateGrid(+size);
})

clearButton.addEventListener('click', () => {
    const mainContainer = document.querySelector("#container");
    let size = mainContainer.childElementCount;
    mainContainer.innerHTML = '';
    populateGrid(+size);
})

/* i fucking misread, it's supposed to be 16x16... would have not run into this problem...
if i had paid attention */

let gridSize = populateGrid(16);
