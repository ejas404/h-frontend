import { UserModel } from "./auth";

export interface StudProfState {
    userData : UserModel | null
}

export interface StudentUpdateModel{
    name : string,
    email : string,
    contact ?: string
}

export interface PasswordUpdate{
    currentPassword  : string,
    newPassword : string
}