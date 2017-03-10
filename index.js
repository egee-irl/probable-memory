const fs = require('fs')
const { dialog } = require('electron').remote
const execFile = require('child_process').execFile

// TODO: Add intelligence around game & executable discovery

document.getElementById('raptor').addEventListener('click', () => {
  fs.access(process.env.HOME + '/Dos/Raptor/RAP.EXE', (err) => {
    if (err) {
      console.log(dialog.showErrorBox('Executable Not Found', 'Raptor executable was not found at: ' + process.env.HOME + '/Dos/Raptor/RAP.EXE'))
    } else {
      console.log('Raptor executable found at: ' + process.env.HOME + '/Dos/Raptor/RAP.EXE')
      execFile('dosbox', [process.env.HOME + '/Dos/Raptor/RAP.EXE', '-exit'], (error, stdout) => {
        if (error) { throw error }
        console.log(stdout)
      })
    }
  })
})

document.getElementById('oregontrail').addEventListener('click', () => {
  fs.access(process.env.HOME + '/Dos/the-oregon-trail/OREGON.EXE', (err) => {
    if (err) {
      console.log(dialog.showErrorBox('Executable Not Found', 'Oregon Trail executable was not found at: ' + process.env.HOME + '/Dos/the-oregon-trail/OREGON.EXE'))
    } else {
      console.log('Raptor executable found at: ' + process.env.HOME + '/Dos/the-oregon-trail/OREGON.EXE')
      execFile('dosbox', [process.env.HOME + '/Dos/the-oregon-trail/OREGON.EXE', '-exit'], (error, stdout) => {
        if (error) { throw error }
        console.log(stdout)
      })
    }
  })
})
