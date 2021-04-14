// setInterval irá rodar uma função N vezes
// depois de tantos milisegundos

const timeOut = 1000
const checking = () => console.log('checking!')

setInterval(checking, timeOut)