# ts-skeleton

An opinionated ~~& spooky~~ skeleton project template for Node projects using TypeScript.

This template makes use of the following:

* TypeScript (es2018 preset)
* Jest (jest-junit for reports)
* Yarn

Visual Studio Code debugging is configured to build before attaching the debugger, so debugging works out of the box.

This project is configured to use **local** Jest & TypeScript binaries, so you don't need to install them globally.

The following commands are supported via  `package.json`:

`yarn start`: Begins running the _compiled_ JS code in the `./dist` folder.

`yarn build`: Builds all TS files from the `./lib` folder into the `./dist` folder.

`yarn rebuild`: Cleans the `./dist` folder, and rebuilds all TS files.

`yarn clean`: Removes all files from the `./dist` folder.

`yarn test`: Runs TS-enabled Jest for the project and outputs a `junit.xml` file.
