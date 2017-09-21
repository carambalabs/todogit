import StartupOperation from "../startup-operation"
import * as firebase from "firebase"

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
}

export default class StartupDatabase implements StartupOperation {
  name: string = "Firebase initializer"

  execute(): Promise<void> {
    return new Promise((resolve, reject) => {
      firebase.initializeApp(config)
      resolve()
    })
  }

}