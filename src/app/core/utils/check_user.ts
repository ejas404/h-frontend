export const checkActionUser = (data : string) => {
    return  data === 'users'?'userlist':'tutorlist'
}