import StartupOperation from "./startup-operation"
import * as operations from "./operations"

export class Startup {
  operations: Array<StartupOperation>

  constructor(operations: Array<StartupOperation>) {
    this.operations = operations
  }

  execute(): Promise<Array<void>> {
    return Promise.all(
      this.operations.map((operation: StartupOperation): Promise<void> => {
        return operation.execute()
      })
    )
  }

  static todogit(): Startup {
    return new Startup([
      new operations.StartupLogger(),
      new operations.StartupDatabase(),
      new operations.StartupRaven()])
  }
}

const appStartup = Startup.todogit()
export default appStartup
