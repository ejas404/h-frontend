import { BASE_URL } from "app/core/constant/uri";
import { JWTDecodeModel } from "app/core/models/auth";
import { decodeUserToken } from "app/core/utils/check_token";

const user = decodeUserToken()

console.log('user details',user)

export const environment = {
    production: false,
    socketUrl: `${BASE_URL}/?user_id=${(user as JWTDecodeModel).userId}` 
  };