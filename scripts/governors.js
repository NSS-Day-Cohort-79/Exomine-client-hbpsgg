import { getGovernors } from "./fetchCalls.js"
import { setGovernor } from "./TransientState.js"

const handleGovernorChange = (changeEvent) => {
    if (changeEvent.target.name === "governor") {
        setGovernor(parseInt(changeEvent.target.value))
    }
}

export const Governors = async () => {
    const governors = await getGovernors()

    let html = `<select name="governor">
        <option value="0">Choose a governor</option>`

    const activeGovernors = governors.filter(gov => gov.active === true)

    for (const governor of activeGovernors) {
        html += `
            <option value="${governor.id}">
                ${governor.name} (${governor.colony.name})
            </option>
        `
    }

    html += `</select>`

    return html
}

document.addEventListener("change", handleGovernorChange)
