
export const SetLocalstorage=(key,value)=>{
    localStorage.setItem(key,value)
    // window.location.reload()
}

export const DeleteLocalStorage=(value)=>{
    localStorage.removeItem(value)
}

export let GetLanguage=()=>{
    return localStorage.getItem("TemurbekIsmoilov20000")==='Uzbekcha'
}
export let GetEnLanguage=()=>{
    return localStorage.getItem("TemurbekIsmoilov20000")==='Inglizcha'
}
export let GetRuLanguage=()=>{
    return localStorage.getItem("TemurbekIsmoilov20000")==='Ruscha'
}
export let getValue=()=>{
    return localStorage.getItem("TemurbekIsmoilov20000");
}
