const gi = require('node-gtk')
Gtk = gi.require('Gtk', '3.0')

gi.startLoop()
Gtk.init()

var header = new Gtk.HeaderBar();
header.setTitle("Test!");
header.setSubtitle("Subtitle test")
header.setShowCloseButton(true);

const win = new Gtk.Window();
win.on('destroy', () => Gtk.mainQuit())
win.on('delete-event', () => false)

win.setDefaultSize(350, 70);
win.setTitlebar(header);
win.borderWidth = 10;

win.setDefaultSize(200, 80)
// win.add(new Gtk.Button.withLabel("Hello Vala"));
win.add(new Gtk.Label({ label: 'Hello Gtk+' }))

win.showAll();
Gtk.main();