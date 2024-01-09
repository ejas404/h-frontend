import { UserModel } from "./auth";


export interface TutorEducation{
    ed_id : string,
    university : string,
    stream : string,
    year : number,
    country : string
}

export interface TutorModel extends UserModel{
    education ?: TutorEducation[] , 
    language ?: string[],
    field ?: string[],
    teaches ?: string[]

}

export interface TutorProfState {
    tutorData : TutorModel | null
}

export interface TutorTagResponse{
    field ?: string[],
    teaches ?: string[],
    languages ?: string[]
}
















