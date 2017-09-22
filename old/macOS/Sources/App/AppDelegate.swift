import Cocoa
import Sparkle

class AppDelegate: NSObject, NSApplicationDelegate {

    var homeWindowController: HomeWindowController!

    func applicationDidFinishLaunching(_ aNotification: Notification) {
        homeWindowController = HomeWindowController()
        homeWindowController.window?.makeKeyAndOrderFront(nil)
    }

    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool {
        return true
    }

}
