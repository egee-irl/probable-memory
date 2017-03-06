// const spawn = require('child_process').spawn;
// const ls = spawn('ls', ['-lh', '/usr']);

document.getElementById("myButton").addEventListener("click", () => {
    const execFile = require('child_process').execFile;
    const child = execFile('dosbox',['/home/egee/Dos/Raptor/RAP.EXE'], (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    console.log(stdout);
    });
});