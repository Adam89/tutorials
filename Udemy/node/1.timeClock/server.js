'use strict';

const Hapi= require('hapi');
const Joi = require('joi');
// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8000
});

// Add the route
server.route({
    method:'GET',
    path:'/hello',
    handler:function(request,h) {
        return 'hello from time clock';
    }
});

server.route({
  method: 'POST',
  path: '/shift',
  config: {
    validate: {
      payload: {
        start: Joi.date().required(),
        end: Joi.date().required()
      },
      failAction: (request, h, error) => {
        throw error;
      }
    }
  },
  handler: (request, h) => {
    return request.payload;
  }
});

// Start the server
const start =  async function() {

  try {
      await server.start();
  }
  catch (err) {
      console.log(err);
      process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
};

start();