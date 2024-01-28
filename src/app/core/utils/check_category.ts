export const checkCategoryType = (category : any) : boolean =>{
    if(typeof(category)=== 'object' && typeof(category) !== null){
        return 'name' in category && typeof(category.name) === 'string'
    }

    return false
}