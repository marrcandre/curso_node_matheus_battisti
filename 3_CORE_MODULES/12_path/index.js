const path = require('path')

const customPath = '/relatorios/matheus/relatorio1.pdf'
console.log(path)
console.log(path.normalize(customPath))
console.log(path.dirname(customPath))
console.log(path.basename(customPath))
console.log(path.extname(customPath))
