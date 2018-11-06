import Component from "@ember/component";
import { os } from "os";
// const os = require("os");

export default Component.extend({
  doubleClick() {
    console.info("DoubleClickableComponent was clicked!");
    return true;
  }
});
