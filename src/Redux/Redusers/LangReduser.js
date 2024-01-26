import {GetEnLanguage, GetLanguage, SetLocalstorage} from "../../Utilitil";

const initialState = {
    uzLang: false,
    enLang:true,
};

export const langReducer = (state = initialState, action) => {
    switch (action.type) {
        case "uzlang":

            SetLocalstorage("TemurbekIsmoilov20000","Uzbekcha")

            // {GetLanguage("enLang")?DeleteLocalStorage("enLang"): SetLocalstorage("TemurbekIsmoilov2000","uzLang")}
            //     return { uzLang: GetLanguage("uzLang")? true:false};
            return {uzLang: true}
        case "enLang":

            SetLocalstorage("TemurbekIsmoilov20000","Inglizcha")
            // {GetLanguage("uzLang")?DeleteLocalStorage("uzLang"): SetLocalstorage("TemurbekIsmoilov2000","enLang")}
            //     return { uzLang: GetLanguage("enLang")? false:true };
            return {
                uzLang: false,
                enLang:true,
            }
        case "ruLang":

            SetLocalstorage("TemurbekIsmoilov20000","Ruscha")
            // {GetLanguage("uzLang")?DeleteLocalStorage("uzLang"): SetLocalstorage("TemurbekIsmoilov2000","enLang")}
            //     return { uzLang: GetLanguage("enLang")? false:true };
            return {
                uzLang: false,
                enLang:false,
            }

        default:
            // if (getValue()){
            //     if (getValue()==='Uzbekcha'){
            //
            //     }
            // }
        {!GetLanguage()?SetLocalstorage("TemurbekIsmoilov20000","Uzbekcha"):GetEnLanguage?SetLocalstorage("TemurbekIsmoilov20000","Inglizcha"):SetLocalstorage("TemurbekIsmoilov20000","Ruscha")}
            // {GetLanguage("uzLang")?DeleteLocalStorage("uzLang"): SetLocalstorage("TemurbekIsmoilov2000","enLang")}
            return {
                uzLang:true
            };
    }
};