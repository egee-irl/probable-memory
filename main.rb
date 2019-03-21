require 'qml'

class Test
  include QML::Access
  register_to_qml(under: "Example", version: "1.0")
  def quit
    puts "Quitting"
    QML.application.quit()
  end
end

QML.run do |app|
  app.load_path Pathname(__FILE__) + '../main.qml'
end
