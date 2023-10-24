/*  a new JavaScript class, ExpressError, is defined, the "extends Error" keyword set  means that the "ExpressError" class inherits from the built-in "Error" class in JavaScript. By doing this, you can use the functionality of the "Error" class and add your own custom behavior or properties to your "ExpressError" instances 

class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
    console.error(this.stack);
  }
}


module.exports = ExpressError;