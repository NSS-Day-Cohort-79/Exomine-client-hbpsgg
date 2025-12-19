import { getFacilities } from "./fetchCalls.js"
import { setFacility } from "./TransientState.js"

const handleFacilityChange = (changeEvent) => {
    if (changeEvent.target.name === "facility") {
        setFacility(parseInt(changeEvent.target.value))
    }
}

export const Facilities = async () => {
    const facilities = await getFacilities()

    let html = `<select name="facility" disabled>
        <option value="0">Choose a facility</option>`

    for (const facility of facilities) {
        if (facility.active) {
            html += `
                <option value="${facility.id}">
                    ${facility.name}
                </option>
            `
        }
    }

    html += `</select>`

    return html
}

document.addEventListener("change", handleFacilityChange)
