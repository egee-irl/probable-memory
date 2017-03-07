document.getElementById('raptor').addEventListener('click', () => {
  const execFile = require('child_process').execFile
  execFile('dosbox', [process.env.HOME + '/Dos/Raptor/RAP.EXE', '-exit'], (error, stdout) => {
    if (error) {
      throw error
    }
    console.log(stdout)
  })
})
