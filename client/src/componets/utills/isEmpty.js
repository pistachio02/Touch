export const isNotEmpty = (str) =>{
    if(str && str.trim && str.trim().length > 0){
        return true
    }
    return false
}

export const isEmpty = (str) =>{
    return !isNotEmpty(str)
}