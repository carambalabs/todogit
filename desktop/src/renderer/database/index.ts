import RxDB, { RxDatabase } from "rxdb"

RxDB.plugin(require("pouchdb-adapter-idb"))

export default class Database {

  static instance: RxDatabase

  static setup = (): Promise<void> => {
    return RxDB.create({
      name: "issues",
      adapter: "idb",
      multiInstance: true
    }).then(database => {
      console.dir(database)
      Database.instance = database
    })
  }

}
