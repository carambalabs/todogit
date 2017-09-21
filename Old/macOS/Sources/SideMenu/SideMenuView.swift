import Foundation
import Cocoa

class SideMenuView: NSView {

    // MARK: - Init

    override init(frame frameRect: NSRect) {
        super.init(frame: frameRect)
        setup()
    }
    
    required init?(coder decoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    // MARK: - Setup
    
    private func setup() {

    }
}
