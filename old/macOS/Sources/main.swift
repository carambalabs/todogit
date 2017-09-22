import Foundation
import Cocoa

let delegate = AppDelegate() //alloc main app's delegate class
NSApplication.shared.delegate = delegate //set as app's delegate

// Old versions:
// NSApplicationMain(C_ARGC, C_ARGV)
_ = NSApplicationMain(CommandLine.argc, CommandLine.unsafeArgv);  //start of run loop
