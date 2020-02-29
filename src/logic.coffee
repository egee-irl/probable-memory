{ execSync, exec } = require 'child_process'
fs                 = require 'fs'

class Utils
  @launchGame: ->
    dosbox = "/usr/bin/env dosbox -exit"
    gamePath = "/home/egee/Source/egeeirl/messy-drawer/public/games/haunted/HAUNTED.EXE"
    exec "#{dosbox}  #{gamePath}"
  @checkForProcesses: ->
    execSync("ps").includes("dosbox")

document.getElementById('game00').addEventListener 'click', () ->
  if !Utils.checkForProcesses()
    Utils.launchGame()
  else
    alert("The game is already running!")
  
