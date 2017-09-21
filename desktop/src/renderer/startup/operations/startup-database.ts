import StartupOperation from "../startup-operation"
import Database from "../../database"

export default class StartupDatabase implements StartupOperation {
  name: string = "Database initializer"

  execute(): Promise<void> {
    return Database.setup()
  }

}