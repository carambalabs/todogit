import { Startup } from "./startup"
import StartupDatabase from "./operations/startup-database"

describe("Startup", () => {
  let todogitStartup: Startup
  beforeAll(() => {
    todogitStartup = Startup.todogit()
  })
  describe("+issues", () => {
    test("it has the correct operations", () => {
      const operations = todogitStartup.operations
      expect(operations[0] instanceof StartupDatabase).toBeTruthy()
    })
  })
})