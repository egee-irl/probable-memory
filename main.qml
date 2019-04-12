import Example 1.0
import QtQuick 2.2
import QtQuick.Layouts 1.12
import QtQuick.Controls 1.4

ApplicationWindow {
  visible: true
  width: 800
  height: 600
  title: "Application Launcher Thing"
  Test {
    id: test
  }
  menuBar: MenuBar {
    Menu {
      title: "File"
      MenuItem { 
        text: "Quit"
        iconSource: "/home/egee/.local/share/icons/hicolor/32x32/apps/4395_SS_setup.0.png"
        onTriggered: test.quit()
      }
    }
  }
  RowLayout {
    Button {
      id: button00
      x: 53
      y: 10
      text: qsTr("Steam")
    }
    Button {
      id: button01
      x: 53
      y: 10
      text: qsTr("Steam")
    }
    Button {
      id: button02
      x: 53
      y: 10
      text: qsTr("Steam")
    }
  }
}
