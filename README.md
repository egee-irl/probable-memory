# probable-memory
This is the _Top-Secret_ repository for Probable-Memory, a simple game launcher similar to [Gnome Games](https://wiki.gnome.org/Apps/Games).

# Purpose
There are alot of really great games that are freely available for people to play but they often require setup and configuration that people don't always have time or desire for.

In most Linux distribution there is a trove of free games obscured within software repositories that users never know exist because these games are burried without an easy way of discovering them.

Probable-Memory's goal is to make it easier to discover and install these free and obscure games.

# Design

Probable-Memory is an [Electron](https://electron.atom.io/) app so it utilizes common web technologies such as JavaScript for logic, HTML for the view, and CSS for styling. Probable-Memory is designed to be simple in scope and lightweight; it is merely a method of discovering and launching games.

While it is an Electron app and by definition is cross-platform, currently the code is tied to the Linux filesystem and will not run on Windows or MacOS machines (BSD should be fine though).