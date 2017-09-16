import Foundation
import AppKit

class HomeWindowController: NSWindowController {

    // MARK: - Attributes

    private var sideMenuViewController: SideMenuViewController!

    // MARK: - Init

    convenience init() {
        let window = HomeWindow(name: "Todogit")
        self.init(window: window)
        setup()
    }

    // MARK: - Private

    private func setup() {
        sideMenuViewController = SideMenuViewController()
        
    }

}
