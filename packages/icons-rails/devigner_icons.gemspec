# frozen_string_literal: true

require_relative "lib/devigner_icons/version"

Gem::Specification.new do |spec|
  spec.name = "devigner_icons"
  spec.version = DevignerIcons::VERSION
  spec.authors = ["Devigner"]
  spec.summary = "10,560 open-source SVG icons for Rails: 2,112 symbols in outline, twotone, bold, bulk and broken."
  spec.description = "Devigner Icons as an inline-SVG view helper for Rails and any other Ruby app. Built on Solar Icon Set and Iconsax."
  spec.homepage = "https://icons.devigner.cc"
  spec.licenses = ["MIT", "CC-BY-4.0"]
  spec.required_ruby_version = ">= 3.0"
  spec.metadata = {
    "source_code_uri" => "https://github.com/devigner-ui/icons/tree/main/packages/icons-rails",
    "bug_tracker_uri" => "https://github.com/devigner-ui/icons/issues",
  }
  spec.files = Dir["lib/**/*", "README.md", "LICENSE", "ATTRIBUTION.md"]
  spec.require_paths = ["lib"]
end
