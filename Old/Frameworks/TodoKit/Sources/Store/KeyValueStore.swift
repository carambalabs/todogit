import Foundation

// MARK: - KeyValueStore

final class KeyValueStore: Store {
    
    // MARK: - Properties
    
    private let userDefaults: UserDefaults
    private let key: String
    
    // MARK: - Init
    
    init(name: String,
         userDefaults: UserDefaults = .standard) {
        self.userDefaults = userDefaults
        self.key = "\(name)_data"
    }
    
    // MARK: - Internal
    
    func observe(key: String) {
        // TODO
    }
    
    func remove(key: String) {
        var dictionary = self.dictionary()
        dictionary.removeValue(forKey: key)
        userDefaults.set(dictionary, forKey: key)
        userDefaults.synchronize()
    }
    
    func update(key: String, value: Any) {
        var dictionary = self.dictionary()
        dictionary[key] = value
        userDefaults.set(dictionary, forKey: key)
        userDefaults.synchronize()
    }
    
    func get<T>(key: String) -> T? {
        let dictionary = self.dictionary()
        guard let value = dictionary[key] else { return nil }
        return value as? T
    }
    
    // MARK: - Private
    
    fileprivate func dictionary() -> [String: Any] {
        return self.userDefaults.dictionary(forKey: self.key) ?? [:]
    }
    
}

// MARK: - Instances

var userStore: KeyValueStore!
var appStore: KeyValueStore!

extension KeyValueStore {
    
    static var user: KeyValueStore {
        if userStore == nil {
            userStore = KeyValueStore(name: "user")
        }
        return userStore
    }
    
    static var app: KeyValueStore {
        if appStore == nil {
            appStore = KeyValueStore(name: "user")
        }
        return appStore
    }
}
