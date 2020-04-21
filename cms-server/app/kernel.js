const express = require('express');
const bodyParser = require('body-parser');
let app = express();
const routes = require('@routes/routes');

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
    },

    /**
     * @function start
     * @boot up the application
     * @return void
     */
    start: () => {
        app.listen(3000, function (err) {
            if (err) {
                throw err;
            }
            console.log(`stated on 3000`);
        });
    },

};
