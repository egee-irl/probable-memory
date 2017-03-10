const fs = require('fs')
var https = require('https')
const { dialog } = require('electron').remote
const execFile = require('child_process').execFile

document.getElementById('biomenace').addEventListener('click', () => {
  fs.access(process.env.HOME + '/.dosgames/bio-menace/BMENACE1.EXE', (err) => {
    if (err) {
      console.log('Did not find executable at path. Downloading it.')
      var file = fs.createWriteStream(process.env.HOME + '/.dosgames/bio-menace.zip')
      https.get('ftp-url', (response) => {
        response.pipe(file)
        file.on('finish', () => {
          file.close()
        })
      })
    } else {
      console.log('Raptor executable found at: ' + process.env.HOME + '/Dos/Raptor/RAP.EXE')
      execFile('dosbox', [process.env.HOME + '/Dos/Raptor/RAP.EXE', '-exit'], (error, stdout) => {
        if (error) { throw error }
        console.log(stdout)
      })
    }
  })
})

document.getElementById('raptor').addEventListener('click', () => {
  fs.access(process.env.HOME + '/.dosgames/Raptor/RAP.EXE', (err) => {
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
  fs.access(process.env.HOME + '/.dosgames/the-oregon-trail/OREGON.EXE', (err) => {
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
