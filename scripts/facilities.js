import { getFacilities } from "../api/fetchCalls.js";
import { setFacility } from "./TransientState.js";

const handleFacilitiesChange = (changeEvent) => {
    if(changeEvent.target.name === "facilities") {
        setFacility(parseInt(changeEvent.target.value))
    }
}

export const Facilities = async() => {
    const facilities = await getFacilities()

    let html = `<select name = "facilities">
        <option value="0">Choose a facility</option>`

    const activeFacilities = facilities.filter(fac => fac.active === true)

    for(const facilities of activeFacilities) {
        html += `
            <option value="${facilities.id}">
                ${facilities.name} (${facilities.minerals.name})
            </option>    
        `
    }
    html += `</select>`

    return html
}

document.addEventListener("change", handleFacilitiesChange)