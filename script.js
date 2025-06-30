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

const cell = document.querySelector(".square")
