const { Sequelize } = require('sequelize')

// const sequelize = new Sequelize('toughts', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql',
// })
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
})

try {
  sequelize.authenticate()
  console.log('Conectamos com o Sequelize!')
  // Show sequelize dialect and storage information
  console.log(`\tTipo de BD: ${sequelize.options.dialect}`)
  console.log(`\tArquivo: ${sequelize.options.storage}`)
} catch (error) {
  console.error('Não foi possível conectar:', error)
}

module.exports = sequelize
