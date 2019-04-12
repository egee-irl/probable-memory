require 'qml'

class Test
  include QML::Access
  register_to_qml(under: "Example", version: "1.0")
  def launch0
    fork { `steam steam://rungameid/306130` }
  end

  def launch1
    fork { `/opt/minecraft-launcher/minecraft-launcher.sh` }
  end

  def quit
    puts "Quitting"
    QML.application.quit()
  end
end

QML.run do |app|
  app.load_path Pathname(__FILE__) + '../main.qml'
end
