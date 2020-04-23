const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes/routes');
const dotenv = require('dotenv');
const {dbConnect} = require('../config/DbConnection');
dotenv.config();

/**
 *@type {app}
 * @return express instance
 */

let app = express();
module.exports = {
    /**
     * @initialize the init function that initialize all the requirements
     * @plugin bodyParser
     *  that needed to boot the applications
     *@return void
     */
    init: () => {
        app.use(bodyParser.json());
        app.use('/api', routes);
        app.use((req, res, next) => {
            const error = new Error;
            error.status = 404;
            next(error);
        });
// error handler middleware
        app.use((error, req, res, next) => {
            res.status(error.status || 500).send({
                error: {
                    status: error.status || 500,
                    message: error.message || 'Internal Server Error',
                },
            });
        });
    },

    /**
     * @function start
     * @boot up the application
     * @return void
     */
    start: () => {
        app.listen(process.env.PORT, function (err) {
            if (err) {
                throw err;
            }
            dbConnect();


            console.log(` new stated on ${process.env.PORT}`);
        });
    },

};
