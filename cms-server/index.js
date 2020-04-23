const {init, start, handleRoute} = require('./app/Kernel');
const UserModel = require('./app/model/UserModel');

/**
 * @method init
 * @initialize the app
 */
init();
/**
 * @method handleRoute
 * @handle the upcoming request
 */

handleRoute();

/**
 * @method start
 * @start the server
 */
start();


