exports.register = (server) => {
  server.route({
    method: 'GET',
    path: '/{param*}', // wildcard
    handler: {
        directory: { //inert provides dir object
            path: '.', //public
            redirectToSlash: true,
            index: false,
        }
    }
});

  server.route({ // explicitly server index
    method: 'GET',
    path: '/',
    handler: {
        file: 'index.html'
    }
  });

};


exports.pkg = {
  name: "home"
}