//fetch governors
export const getGovernors = async () => {
    return fetch(`http://localhost:8088/Governor?_expand=colony`).then((res) =>
        res.json())
}
//fetch colony inventory
export const getColonyInventory = async () => {
    return fetch(`http://localhost:8088/colonyMinerals?_expand=colony&_expand=mineral`).then((res) => res.json())
}

//Fetch minerals
export const getMinerals = async () => {
    return fetch(`http://localhost:8088/minerals`).then((res) => res.json())
}

//Fetch facilities
export const getFacilities = async () => {
    return fetch(`http://localhost:8088/Facility`).then((res) => res.json())
}