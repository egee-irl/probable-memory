import Component from "@ember/component";
const os = requireNode("os");

export default Component.extend({
  doubleClick() {
    console.info("DoubleClickableComponent was clicked!");
    return true;
  }
});
