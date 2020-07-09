# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "arco"
  spec.version       = "0.7.0"
  spec.authors       = ["meebuhs"]
  spec.email         = ["meebuhs@gmail.com"]

  spec.summary       = "A fixed sidebar, two column masonry grid jekyll theme."
  spec.homepage      = "https://github.com/meebuhs/arco"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", ">= 3.5", "< 5.0"
end