import Foundation

protocol Store {
    func remove(key: String)
    func update(key: String, value: Any)
    func get<T>(key: String) -> T?
}
