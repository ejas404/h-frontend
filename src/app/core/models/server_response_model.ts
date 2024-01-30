export interface SuccessMessage {
    message: string
}

export interface CheckOutResponse {
    success: boolean
    url: string
    paid: boolean
    enid: string
}