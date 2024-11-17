const usersRouter = require('./usersRouter');
const recognizedRouter = require('./recognizedRouter');
const experimentalRouter = require('./experimentalRouter');
const findRouter = require('./findRouter');

function routerAPI(app){
    // Endpoints
    app.use('/api/users', usersRouter);

    app.use('/api/recognized', recognizedRouter);

    app.use('/api/experimental', experimentalRouter);

    app.use('/api/find', findRouter);
};

module.exports = routerAPI;