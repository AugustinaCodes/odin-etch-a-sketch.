const container = document.querySelector("#container")

for (let i = 0; i < 16; i++) {
    const column = document.createElement("div")
    column.classList.add("column")
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement("div")
        cell.classList.add("square")
        column.appendChild(cell)
    }
    container.appendChild(column)
}

const cells = document.querySelectorAll(".square")
cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.classList.add("hovered")
    })
})

const button = document.querySelector("button")
button.addEventListener("click", () => {
    const answer = prompt("Enter number of squares per side you'd like your nre grid to be")
    const number = Number(answer)

    if(number > 100) {
        prompt("Please enter a number smaller than a 100")
    }
    console.log(typeof number);
    
})
