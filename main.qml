import Example 1.0
import QtQuick 2.2
import QtQuick.Controls 1.1

ApplicationWindow {
    visible: true
    width: 200
    height: 100
    title: "Hello, world!"
    // The thing below was created via the designer in Qt Creator
    Item {
      Button {
          id: button01
          x: 53
          y: 10
          text: qsTr("Steam")
          onClicked: test.launch0()
      }
      Button {
        id: button02
        x: 53
        y: 60
        text: qsTr("Minecraft")
        onClicked: test.launch1()
      }
    Test {
      id: test
    }
  }
}
