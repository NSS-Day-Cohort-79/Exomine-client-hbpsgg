import { setSocioLocationId } from "./transientState.js"
const handleLocationChange = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const locationId = parseInt(changeEvent.target.value)
        setSocioLocationId(locationId)
    }
}
export const GovernorChoices = async () => {
    s
    const response = await fetch("http://localhost:8088/Governor")
    const governors = await response.json()
}

// Exported function to render governors
export const Governors = () => {
    const activeGovernors = governors.filter(gov => gov.isActive)

    let html = `
        <label for="governor">Choose a Governor</label>
        <select id="governor">
            <option value="0">Select a governor...</option>
    `

    for (const governor of activeGovernors) {
        html += `
            <option value="${governor.id}">
                ${governor.name}
            </option>
        `
    }

    html += `</select>`

    return html
}
