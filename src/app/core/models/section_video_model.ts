export interface SectionFormDetails{
    title : string,
    description : string,
    course : string
}

export interface SectionResponse extends SectionFormDetails{
    _id : string
}

export interface VideoModel {
    title : string,
    description : string,
    section : string,
    duration : number,
    isPaid ?: boolean
}


export interface VideoResponseModel extends VideoModel{
    _id : string
}

export interface VideoWithUrl extends VideoResponseModel{
    url : string
}
