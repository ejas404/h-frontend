export const checkDecimal = (value : number) => {
    const str = value.toString()
    if(!str.includes('.')) return str;
    let newStr = str.slice(0,(str.indexOf('.')+3))
    return newStr
}