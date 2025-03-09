const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Tinder Clone API',
    description: 'API documentation for Tinder Clone application',
    version: '1.0.0'
  },
  host: 'localhost:5000',
  basePath: '/',
  schemes: ['http'],
  definitions: {
    User: {
      name: 'John Doe',
      email: 'john@example.com',
      age: 25,
      gender: 'male',
      interestedIn: 'female',
      bio: 'A short bio',
      latitude: 48.8566,
      longitude: 2.3522
    }
  }
};

const outputFile = './swagger.json';
const routes = ['./app.js'];

// Génère le fichier swagger.json
swaggerAutogen(outputFile, routes, doc);