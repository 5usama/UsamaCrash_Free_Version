const fs = require('fs')

// >~~~~~~~~~~ Owner Setting ~~~~~~~~~~~< //
global.autoReact = true
global.antiDelete = true
global.autostatusview = true
global.autoRecording = true
global.autoTyping = true
global.prefa = ['','!','.',',','🐤','🗿']
// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
