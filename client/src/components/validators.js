export function nameValidator(value){
    const myRegEx = /^[A-Z\s]+$/i
    return myRegEx.test(value)
}

export function yearsValidator(value){
    return value>0 && value<30
}

export function weightValidator(value){
    return value>0 && value<100
}

export function heightValidator(value){
    return value>0 && value<150
}