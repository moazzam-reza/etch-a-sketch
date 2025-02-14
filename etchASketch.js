function populateGrid(size) {
    const mainContainer = document.querySelector("#container");
    let windowArea = window.innerHeight * window.innerWidth;
    let gridBoxSideLength = Math.sqrt(windowArea / size);

    for (let i=0; i < size; i++) {
        let gridBox = document.createElement("div");
        gridBox.classList.add("grid-box");
        gridBox.style.width = `${gridBoxSideLength}px`;
        gridBox.style.height = `${gridBoxSideLength}px`;

        mainContainer.appendChild(gridBox);
    }

    return size;
}

/* i fucking misread, it's supposed to be 16x16... would have not run into this problem...
if i had paid attention */

let gridSize = populateGrid(200);

window.addEventListener('resize', () => {
    const mainContainer = document.querySelector("#container");

    let windowArea = window.innerHeight * window.innerWidth;
    let gridBoxSideLength = Math.sqrt(windowArea / gridSize);

    for (let gridBox of mainContainer.childNodes) {
        gridBox.style.width = `${gridBoxSideLength}px`;
        gridBox.style.height = `${gridBoxSideLength}px`;
    }
})
