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

            row.appendChild(gridBox);

            gridBox.addEventListener('mouseenter', (e) => {
                e.target.style.backgroundColor = 'black';
            })
        }
        mainContainer.appendChild(row);
    }

    return size;
}

window.addEventListener('resize', () => {
    const mainContainer = document.querySelector("#container");
    let smaller = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight; 

    mainContainer.style.height = `${smaller}px`;
    mainContainer.style.width = `${smaller}px`;
})

/* i fucking misread, it's supposed to be 16x16... would have not run into this problem...
if i had paid attention */

let gridSize = populateGrid(16);
