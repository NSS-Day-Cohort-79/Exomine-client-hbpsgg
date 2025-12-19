import { setSocioLocationId } from "./transientState.js"
const handleLocationChange = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const locationId = parseInt(changeEvent.target.value)
        setSocioLocationId(locationId)
    }
}
export const LocationChoices = async () => {
    const response = await fetch("http://localhost:8088/socioLocations")
    const locations = await response.json()
}

// Exported function to render minerals
export const Minerals = () => {
    let html = `<h3>Available Minerals</h3>`

    for (const mineral of minerals) {
        html += `
            <div>
                <span>${mineral.name} (${mineral.quantity} tons)</span>
                ${mineral.quantity > 0
                ? `<input type="radio" name="mineral" value="${mineral.id}" />`
                : ``
            }
            </div>
        `
    }

    return html
}
