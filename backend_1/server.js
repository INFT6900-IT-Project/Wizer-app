// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// // const routesHandler = require("./routes/handler.js");
// const swaggerUI = require("swagger-ui-express");
// const swaggerSpec = require("./swagger");
// const swaggerJSDoc = require('swagger-jsdoc');


// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// // app.use("/", routesHandler);



// const corsOptions = {
//     origin: "*",
//     credential: true,
//     optionSuccessStatus: 200,
// };

// app.use(cors(corsOptions));



// // Serve Swagger documentation
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// // Your API routes go here

// /**
//  * @swagger
//  * /api:
//  *   get:
//  *     summary: Retrieve a list of JSONPlaceholder users
//  *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
// */
// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

// app.post("/api", (req, res) => {
//     res.send("test");
// });

const express = require("express");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Wizer API Documentation',
        version: '1.0.0',
        description:
            'Wizer API Documentation',
    },
    servers: [
        {
            url: 'http://localhost:4000',
            description: 'Development server',
        },
    ],
};

const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
var app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = 4000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

app.get("/", (request, response) => {
    response.json({
        info: 'Hello world!'
    });
})

app.post("/test-post", (request, response) => {
    response.json({
        info: 'Hello world!'
    });
})