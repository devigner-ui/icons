# frozen_string_literal: true

require "erb"
require_relative "devigner_icons/version"

# Devigner Icons as inline SVG.
#
#   DevignerIcons.svg("BagStraps", variant: :bold, class: "size-6")
#
# In Rails the same call is a view helper, devigner_icon, and returns an
# html_safe string. The drawings are the files in svg/, rendered at build time
# from the React package, so they match every other Devigner package.
module DevignerIcons
  STYLES = %w[outline twotone bold bulk broken].freeze
  # The styles stroke_width reaches, as in every other package.
  WEIGHED = %w[outline twotone broken].freeze
  ROOT = File.expand_path("devigner_icons/svg", __dir__)

  class UnknownIcon < ArgumentError; end

  @cache = {}
  @lock = Mutex.new

  class << self
    # BagStraps, :bag_straps and "bag-straps" all name the same icon.
    def name_of(name)
      name = name.to_s
      return name unless name.match?(/[_-]/) || name.match?(/\A[a-z]/)

      name.split(/[_-]/).map { |part| part[0].upcase + part[1..] }.join
    end

    def svg(name, variant: :outline, stroke_width: nil, **attrs)
      variant = variant.to_s
      raise ArgumentError, "variant must be one of #{STYLES.join(", ")}" unless STYLES.include?(variant)

      markup = read(name_of(name), variant)
      if stroke_width && WEIGHED.include?(variant)
        markup = markup.gsub(/stroke-width="[^"]*"/, %(stroke-width="#{ERB::Util.html_escape(stroke_width)}"))
      end

      # Decorative unless named, the rule every package follows: an icon
      # beside its own label is otherwise read out twice.
      attrs = attrs.transform_keys { |key| key.to_s.tr("_", "-") }
      named = attrs.key?("aria-label") || attrs.key?("aria-labelledby")
      extra = { "focusable" => "false" }
      extra[named ? "role" : "aria-hidden"] = named ? "img" : "true"
      list = extra.merge(attrs).filter_map do |key, value|
        next if value.nil? || value == false

        %( #{key}="#{ERB::Util.html_escape(value)}")
      end
      markup.sub("<svg", "<svg#{list.join}")
    end

    private

    # Only names made of word characters reach the filesystem, so a name is
    # never a path.
    def read(name, variant)
      @lock.synchronize do
        @cache[[name, variant]] ||= begin
          file = File.join(ROOT, variant, "#{name}.svg")
          raise UnknownIcon, "no icon named #{name}" unless name.match?(/\A\w+\z/) && File.file?(file)

          File.read(file).freeze
        end
      end
    end
  end

  # The view helper, mixed into ActionView by the Railtie.
  module Helper
    def devigner_icon(name, **options)
      markup = DevignerIcons.svg(name, **options)
      markup.respond_to?(:html_safe) ? markup.html_safe : markup
    end
  end
end

require_relative "devigner_icons/railtie" if defined?(Rails::Railtie)
