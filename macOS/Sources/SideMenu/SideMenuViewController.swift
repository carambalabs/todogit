import Foundation
import Cocoa

class SideMenuViewController: NSViewController {
    
    // MARK: - Init
    
    init() {
        super.init(nibName: nil, bundle: nil)
        self.view = SideMenuView()
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

}
