# frozen_string_literal: true

module DevignerIcons
  # Makes devigner_icon available in every view, with no include to write.
  class Railtie < Rails::Railtie
    initializer "devigner_icons.helper" do
      ActiveSupport.on_load(:action_view) { include DevignerIcons::Helper }
    end
  end
end
