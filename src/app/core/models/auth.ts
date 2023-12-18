export interface LoginCredential{
    name  : string,
    password : string
}

export interface UserModel{
    email : string | null,
    name : string | null,
    role ?: string,
    _id ?: string,
    contact ?: string,
    isBlocked ?: boolean
}

export interface RegisterModel{
    email : string | null | undefined,
    name : string | null | undefined ,
    password : string| null | undefined
}


export interface AuthSuccessResponse{
    token : string,
    msg : string,
    user : UserModel
}

