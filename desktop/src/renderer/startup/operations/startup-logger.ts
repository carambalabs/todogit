import StartupOperation from "../startup-operation"
import Logger from "js-logger"

export default class StartupLogger implements StartupOperation {
  name: string = "Logger initializer"

  execute(): Promise<void> {
    return new Promise((resolve, reject) => {
      Logger.useDefaults()
      resolve()
    })
  }

}