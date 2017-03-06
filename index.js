document.getElementById("myButton").addEventListener("click", () => {
    const execFile = require('child_process').execFile;
    const child = execFile('dosbox',[process.env.HOME+'/Dos/Raptor/RAP.EXE', '-exit'], (error, stdout) => {
    if (error) {
        throw error;
    }
    console.log(stdout);
    });
});