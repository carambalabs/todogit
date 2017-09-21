export default interface StartupOperation {
  name: string
  execute(): Promise<void>
}
