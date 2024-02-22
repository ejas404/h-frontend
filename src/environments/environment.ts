
import { JWTDecodeModel } from "app/core/models/auth";
import { decodeUserToken } from "app/core/utils/check_token";

const user = decodeUserToken()



export const environment = {
    production: false,
    BASE_URL :'http://localhost:4440/api',
    SERVER_URL : 'http://localhost:4440',
    socketUrl: `http://localhost:4440/?user_id=${(user as JWTDecodeModel).userId}`,
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