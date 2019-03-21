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
          id: button
          x: 53
          y: 34
          text: qsTr("Hey All")
          onClicked: test.quit()
      }
    Test {
      id: test
    }
  }
}