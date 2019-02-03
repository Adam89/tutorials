const Path = require ('path');

module.exports = {
  server: {
    port: 8000,
    routes: {
      files: {
          relativeTo: Path.join(__dirname, 'public') // when server needs file look in dir public
      }
  }
},
register: {
    plugins: [
      {
        plugin: require('inert')
      },
      {
        plugin: require('./home')
      },
      {
          plugin: require('./employee'),
      }
    ],
  }
}