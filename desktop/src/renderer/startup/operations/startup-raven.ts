import StartupOperation from "../startup-operation"
import Raven from "raven-js"

export default class StartupRaven implements StartupOperation {
  name: string = "Raven initializer"

  execute(): Promise<void> {
    return new Promise((resolve, reject) => {
      const dsn = process.env.RAVEN_DSN
      Raven.config(dsn).install()
      resolve()
    })
  }

}