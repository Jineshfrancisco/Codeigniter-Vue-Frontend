/**
 * ==================================================
 * First we will load all  JavaScript dependencies ||
 * ==================================================
 */

/**
 * ==================================================
 *               CSS FrameWork
 * ==================================================
 *
 *  CSS FrameWork such as Twitter Bootstrap
 * ----------------------------------------------------
 * Which FrameWork You want to Use ? , Un-Comment the appropriate line
 * by default  "bulma"
 *
 */

/**
 * if you want to use ("bootstrap.js")  
 * add bootstrap dependency to your package.json file
 *  "jquery": "^3.5.1",
 *	"bootstrap": "^4.4.1",
 *	"popper.js": "^1.12",
 *  run command npm install 
 * 
 * please un-comment below line
 */

// require('./config/bootstrap');


/**
 * ===============================================
 *       Frontend FrameWork   Vue       ||
 * -----------------------------------------------
 *
 */

require('./config/vue');

/**
 * ========================================================
 *       for  axios HTTP Client
 * ========================================================.
 * if you want to use axios please un-comment below line
 */

//  require('./config/axios');

/**
 * =======================================
 * vanilla Javascript code
 * =======================================
 */
require('./config/simple');
