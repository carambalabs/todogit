import Foundation
import AppKit

fileprivate let defaultSize = NSSize(width: 1100, height: 700)

extension NSWindow {

    convenience init(name: String) {
        self.init(contentRect: NSRect(x: 0, y: 0, width: defaultSize.width, height: defaultSize.height),
                  styleMask: [.resizable, .titled, .miniaturizable, .closable],
                  backing: .buffered,
                  defer: false)
        self.title = name
        self.contentMinSize = defaultSize
    }

}
