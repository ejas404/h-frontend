// this is used to specify the category type in course model as an object there is  a chane of getting category as string too
//eg category : string | {name : string}
export const checkCategoryType = (category : any) : boolean =>{
    if(typeof(category)=== 'object' && typeof(category) !== null){
        return 'name' in category && typeof(category.name) === 'string'
    }
    return false
}