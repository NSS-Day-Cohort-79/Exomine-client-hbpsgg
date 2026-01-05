import { getGovernors } from "./fetchCalls.js"
import { getTransientState } from "./TransientState.js"

const colonies = {
    1: "Meridian Station",
    2: "Europa Deep",
    3: "Titan's Gate",
    4: "Ceres Outpost",
    5: "Callisto Prime",
    6: "Hope Horizon"
}

export const Colonies = async () => {
    const governors = await getGovernors()
    const transientState = getTransientState()

    let html = "<h2>Colony</h2>"

    if (transientState.selectedGovernor) {
        const selectedGovernor = governors.find(
            governor => governor.id === transientState.selectedGovernor
        )

        if (selectedGovernor) {
            html += `<p>${colonies[selectedGovernor.colonyId]}</p>`
        }
    }

    return html
}
