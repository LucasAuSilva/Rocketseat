// clearTimeout cancelar um setTimeout

const timeOut = 3000
const finshed = () => console.log('done!')

let timer = setTimeout(finshed, timeOut)
clearTimeout(timer)
