const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Event Registration System API",
    version: "1.0.0",
    description: "API documentation for Event Registration System",
  },
  servers: [
    {
      url: "http://localhost:5000",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/routes/*.js"], // where docs will be read from
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;