
import { JWTDecodeModel } from "app/core/models/auth";
import { decodeUserToken } from "app/core/utils/check_token";

const user = decodeUserToken()

const SERVER_URL = 'https://project-horizon.today'

export const environment = {
  production: true,
  BASE_URL :'api',
  SERVER_URL : SERVER_URL,
  socketUrl: `${SERVER_URL}/?user_id=${(user as JWTDecodeModel).userId}`,
  firebaseConfig: {
    apiKey: "AIzaSyCsUQEHma3uNYMzzrj3lX6KEsNce74cj0Q",
    authDomain: "project-h-6a380.firebaseapp.com",
    projectId: "project-h-6a380",
    storageBucket: "project-h-6a380.appspot.com",
    messagingSenderId: "865488933354",
    appId: "1:865488933354:web:38f6d75c47aca1a2bfe293",
    measurementId: "G-YT1CF9WL5T"
  },
};