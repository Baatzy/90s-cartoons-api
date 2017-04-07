const path = require('path')

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/cartoon_shows_db',
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    }
  }
}
