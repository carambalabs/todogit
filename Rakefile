IOS_DESTINATION = "platform=iOS Simulator,name=iPhone 6,OS=11.0"
MACOS_DESTINATION = "platform=OS X,arch=x86_64"

def build(scheme, action, destination)
    command = ["xcodebuild"]
    command << "-workspace Todogit.xcworkspace"
    command << "-scheme #{scheme}"
    command << "-config Debug"
    command << "-destination '#{destination}'"        
    command << action
    command << "| xcpretty"
    system(command.join(" "))
end

namespace :build do
    task :ios do
        build("iOS", "clean build", IOS_DESTINATION)
    end

    task :macos do
        build("macOS", "clean build", MACOS_DESTINATION)
    end
end

namespace :test do
    task :ios do
        build("iOS", "clean test", IOS_DESTINATION)
    end
    task :macos do
        build("macOS", "clean test", MACOS_DESTINATION)
    end
end