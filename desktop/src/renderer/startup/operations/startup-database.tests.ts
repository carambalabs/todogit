// import StartupFirebase from "./startup-firebase"

// describe("StartupFirebase", () => {
//   describe("-execute", () => {
//     test("initializes firebase", () => {
//       let calledConfig: any = {}
//       const operation = new StartupFirebase(config => {
//         calledConfig = config
//       }, {
//         apiKey: "key",
//         authDomain: "authdomain",
//         databaseURL: "database_url"
//       })
//       operation.execute()
//       expect(calledConfig.apiKey).toBe("key")
//       expect(calledConfig.authDomain).toBe("authdomain")
//       expect(calledConfig.databaseURL).toBe("database_url")
//     })
//   })
//   describe("-name", () => {
//     test("it returns the correct name", () => {
//       const operation = new StartupFirebase()
//       expect(operation.name).toBe("Firebase initializer")
//     })
//   })
// })