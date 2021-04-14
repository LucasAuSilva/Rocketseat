const getFlagValue = require('./getFlag')

console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)