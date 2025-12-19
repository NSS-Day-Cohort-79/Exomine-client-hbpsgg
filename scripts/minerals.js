import { getMinerals } from "./fetchCalls.js"
import { setMineral } from "./TransientState.js"

const handleMineralChange = (changeEvent) => {
    if (changeEvent.target.name === "mineral") {
        setMineral(parseInt(changeEvent.target.value))
    }
}

export const Minerals = async () => {
    const minerals = await getMinerals()

    let html = `<ul>`

    for (const mineral of minerals) {
        html += `
            <li>
                <input type="radio" name="mineral" value="${mineral.id}" />
                ${mineral.name}
            </li>
        `
    }

    html += `</ul>`

    return html
}

document.addEventListener("change", handleMineralChange)
