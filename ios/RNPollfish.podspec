
Pod::Spec.new do |s|
  s.name         = "RNPollfish"
  s.version      = "1.0.0"
  s.summary      = "RNPollfish"
  s.description  = <<-DESC
                  RNPollfish
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "jeral17@gmail.com" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/jerson/react-native-pollfish.git", :tag => "master" }
  s.source_files  = "RNPollfish/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  s.dependency "Pollfish", "~> 4.3.5"

end

  