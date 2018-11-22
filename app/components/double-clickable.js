import Component from "@ember/component";
const execFile = requireNode("child_process").execFile;

export default Component.extend({
  doubleClick() {
    const path = `${
      process.env.HOME
    }/.local/share/Steam/steamapps/common/dota 2 beta/game/dota.sh`;
    const enableConsole = "-console";
    const game = "+timedemoquit dota2demo";
    execFile(path, [enableConsole, game], (error, stdout) => {
      if (error) {
        throw error;
      }
      console.log(stdout);
    });
    return true;
  }
});
