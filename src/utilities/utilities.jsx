export const getDateFormate = (date) => {    //  дата в формате нормального времени (не миллисекунды)
    const hours = new Date(date).getHours().toString().padStart(2, "0");
    const minutes = new Date(date).getMinutes().toString().padStart(2, "0");
    const seconds = new Date(date).getSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;   
}

export const gettingUTCTimeMS = (date) => {
    return date.getTime() + new Date().getTimezoneOffset() * 60 * 1000
}