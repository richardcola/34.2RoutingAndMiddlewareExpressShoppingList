/*
global.items = [], initializes a global array named items in the Node.js environment. This array is assigned as a property of the global object (global), making it accessible from any module or part of your Node.js application. Any modifications to this array will be reflected globally, which is often discouraged in best practices due to potential side effects and unintended consequences.


module.exports = items, exports the items array as the public interface of the module which allows other parts of the application to import this module and access the items array as if it were a local variable. This same pattern is commonly used to share a single instance of an object or data structure across different modules in the application.

*/

global.items = []

module.exports = items